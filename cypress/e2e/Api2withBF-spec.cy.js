import items from '../fixtures/item.json'

  describe('Api Testing', function () {
    beforeEach(function() {
        cy.request('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty').as('lb')
    })

    it('GET', function () { 
        cy.get('@lb').should(res => {
            // headers
            expect(res).to.have.property('headers')
            // body length 
            expect(res.body).to.have.length(96)
            // status 
            expect(res.status).to.eq(200)
           
        })
    })
    it('Validate key content', function () {
      let arr = items
       for(var key  in arr){
        var value = arr[key]
        console.log(key, value)
       }
       cy.get('@lb').should(res => {
        expect(res.body).to.equal(items)
       })
       })
       })
    
        
    

    
  
/* cy.request('https://gorest.co.in/public/v2/todos').its('body').each(value => {
      expect(value).to.have.all.keys('id','user_id','title','due_on','status')

*/






  