import { Router } from "./router.js"

const router = new Router()
router.add('/', "/pages/home.html")
router.add('/exploracao', "/pages/exploracao.html")
router.add('/universo', "/pages/universo.html")
router.add('/error', "/pages/error.html")


router.handle()

window.onpopstate = () => router.handle()
window.route = (event) => router.route(event)   //adiconando a função route a toda window  