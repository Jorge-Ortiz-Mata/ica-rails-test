// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import firebase from "@firebase/app-compat"

firebase.initializeApp({
  apiKey: "AIzaSyBLlQg6g6jSVc28MFPIKNwCBWNKfQ2FnRk",
  authDomain: "jorge-firebase-test.firebaseapp.com"
})
