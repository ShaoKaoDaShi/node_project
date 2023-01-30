class MiddlewareContainer {
    middlewareArray = [];
    use (fun){
        this.middlewareArray.push(fun)
    }

    targetMiddleware (req, res) {
        const firstMiddleware = [...this.middlewareArray].shift();
        const newNext = this.next.bind(this, req, res)
        firstMiddleware(req, res, newNext)

    }

    next(req,res){
        const middleware = [...this.middlewareArray].slice(1).shift()
        const newNext = this.next.bind(this, req, res)
        middleware && middleware(req, res, newNext)
    }

}