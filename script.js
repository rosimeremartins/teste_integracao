// URL GET
// https://jsonplaceholder.typicode.com/posts?userId=1

//script GET
pm.test("Status da resposta é 200 OK", function () {
    pm.response.to.have.status(200);
});

pm.test("Resposta contém 10 posts para o userId 1", function () {
    const responseData = pm.response.json();
    pm.expect(responseData.length).to.eql(10);
});

pm.test("O primeiro post tem a propriedade 'userId'", function () {
    const responseData = pm.response.json();
    pm.expect(responseData[0]).to.have.property('userId');
});

//POST
// URL https://jsonplaceholder.typicode.com/posts
//body

/*
{
    "title": "foo",
    "body": "bar",
    "userId": 1
}

*/

//Scrip 
pm.test("Status da resposta é 201 Created", function () {
    pm.response.to.have.status(201);
});

pm.test("Resposta contém o ID do novo post", function () {
    const responseData = pm.response.json();
    pm.expect(responseData).to.have.property('id');
});

pm.test("O título do novo post é 'foo'", function () {
    const responseData = pm.response.json();
    pm.expect(responseData.title).to.eql('foo');
});
