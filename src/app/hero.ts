export class Hero {
    constructor(
        public id:number,
        public name:string,
        public power:string,
        public alterEgo?:string,    // alterEgo is optional that's why '?'
    ){}
}
