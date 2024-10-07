
export class Router{

  routes = {}

  add(routeName, page){
    this.routes[routeName] = page
  }

  route(event){
    event.preventDefault()
  
    const href = event.currentTarget.href
    
    window.history.pushState({}, '', href)
  
    this.handle()
  }

  handle(){
    let currentRoute = "" 

    const { pathname } = window.location
  
    if (pathname === currentRoute) {
    return;
    }
  
    const route = this.routes[pathname] || this.routes["/error"]
    
    fetch(route)  //buscando a rota
    .then(data => data.text())  //quando buscar a rota retornar os dados em .text()
    .then(html => {
      document.querySelector('#app').innerHTML = html
  
      currentRoute = pathname;
  
    }) 
    
  
  }
}

