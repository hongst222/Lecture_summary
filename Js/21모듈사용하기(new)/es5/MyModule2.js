const name = "node";
const property = {id: 'noodjs', type: 'javascript'};
const say = function() {
    console.log("HW");
}
const home = {
    postcode: '12345',
    address: '서울시 강남구 역삼동',
    getAddress: function() {
        console.log(this.postcode + ' ' + this.address);
    }
};

