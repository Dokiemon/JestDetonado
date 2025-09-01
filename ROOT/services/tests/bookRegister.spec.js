function soma(a, b) {
    return(a + b);
}

describe("Initial tests", () =>{
    it("First test", () =>{
        const x = 1;
        const y = 2;

        let result = soma(x, y);

        expect(result).toEqual(3);
    })
})