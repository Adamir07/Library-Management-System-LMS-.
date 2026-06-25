if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const methodOverride = require('method-override')
const session = require('express-session')
const flash = require('connect-flash')
const path = require('path')

const indexRoutes = require('./routes/indexRoutes')
const authRoutes = require('./routes/authRoutes')
const adminRoutes = require('./routes/adminRoutes')
const { adminArea, checkUser } = require('./middlewares/authMiddleware')
const { genreList } = require('./middlewares/userMiddleware')

const app = express()

// ✅ Multer storage (Windows-safe paths)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'cover_image') {
      cb(null, path.join(__dirname, 'public', 'images'))
    } else {
      cb(null, path.join(__dirname, 'public', 'user_images'))
    }
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`)
  }
})

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/webp'
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

app.set('view engine', 'ejs')
app.set('layout', 'layouts/base-layout')
app.use(expressLayouts)

// ✅ Static folders (هذا اللي يصلح كل الصور)
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')))
app.use('/images', express.static(path.join(__dirname, 'public', 'images')))
app.use('/user_images', express.static(path.join(__dirname, 'public', 'user_images')))

// ✅ (اختياري) نخليه موجود عشان لو فيه مسارات قديمة مثل /public/....
app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(cookieParser('secret'))
app.use(session({
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}))
app.use(flash())

app.use(
  multer({ storage, fileFilter }).fields([
    { name: 'cover_image', maxCount: 1 },
    { name: 'profile_picture', maxCount: 1 },
  ])
)

app.get('*', genreList)
app.get('*', checkUser)
app.use('/admin', adminArea, adminRoutes)
app.use('/', authRoutes)
app.use('/', indexRoutes)

mongoose.connect(process.env.DB_URL)
  .then(() => {
    const port = process.env.PORT || 3000
    app.listen(port, () => {
      console.log(`Alvin's Library | Listening at http://localhost:${port}`)
    })
  })
  .catch((err) => console.log(err))