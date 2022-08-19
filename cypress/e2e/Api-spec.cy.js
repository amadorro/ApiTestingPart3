

describe('Api testing', () => {
  beforeEach(function() {
    cy.request('GET','https://gorest.co.in/public/v2/todos').as('todo')
  
  })

  it('Body - Length', () => {
    cy.request('https://gorest.co.in/public/v2/todos').its('body').should('have.length', 10)
  })
  it('Request status', () => {
    cy.request('https://gorest.co.in/public/v2/todos').its('status').should('eq',200)
  })
  it('Header  validation', () => {
    cy.request('https://gorest.co.in/public/v2/todos').its('headers').its('cache-control').should('include',"max-age=0, private, must-revalidate")
  })
  const apiItems = [
    
      {
        "id": 1744,
        "user_id": 3455,
        "title": "Consequuntur adfectus voluptatum vix tricesimus universe venio amplus pauci sunt.",
        "due_on": "2022-08-13T00:00:00.000+05:30",
        "status": "completed"
      },
      {
        "id": 1743,
        "user_id": 3454,
        "title": "Approbo aeger acervus tepidus corporis bellum celo sol trepide admoveo.",
        "due_on": "2022-08-17T00:00:00.000+05:30",
        "status": "pending"
      },
      {
        "id": 1741,
        "user_id": 3452,
        "title": "Utor universe vindico aperiam nam debilito perspiciatis desidero coepi.",
        "due_on": "2022-08-02T00:00:00.000+05:30",
        "status": "pending"
      },
      {
        "id": 1740,
        "user_id": 3450,
        "title": "Eaque ut aut bestia depraedor valens vir volutabrum aut.",
        "due_on": "2022-08-13T00:00:00.000+05:30",
        "status": "pending"
      },
      {
        "id": 1739,
        "user_id": 3448,
        "title": "Careo triginta arcesso eveniet carus valeo.",
        "due_on": "2022-08-23T00:00:00.000+05:30",
        "status": "pending"
      },
      {
        "id": 1738,
        "user_id": 3447,
        "title": "Tego tutis complectus dolorum demonstro rerum cultellus arcesso.",
        "due_on": "2022-08-14T00:00:00.000+05:30",
        "status": "completed"
      },
      {
        "id": 1737,
        "user_id": 3442,
        "title": "Dolor aegre autem utrimque ars cursus denego aedificium cum.",
        "due_on": "2022-08-06T00:00:00.000+05:30",
        "status": "pending"
      },
      {
        "id": 1736,
        "user_id": 3440,
        "title": "Virgo cetera thymum cohors in aufero.",
        "due_on": "2022-08-11T00:00:00.000+05:30",
        "status": "pending"
      },
      {
        "id": 1735,
        "user_id": 3435,
        "title": "Concedo amitto tricesimus victoria cuppedia auctus turba.",
        "due_on": "2022-08-24T00:00:00.000+05:30",
        "status": "completed"
      },
      {
        "id": 1733,
        "user_id": 3427,
        "title": "Tego vetus curo umquam tactus crastinus arcesso tam strues.",
        "due_on": "2022-07-31T00:00:00.000+05:30",
        "status": "pending"
      }
  ]
  it('Api body items validation', () => {
    cy.request('https://gorest.co.in/public/v2/todos').its('body').should('deep.eq',apiItems)
  })
  it('JSON Schema Check', () => {
    cy.request('https://gorest.co.in/public/v2/todos').its('body').each(value => {
      expect(value).to.have.all.keys('id','user_id','title','due_on','status')
    })
})
  it('Usin Aliase request', function() {
    cy.get('@todo').should(response => {
      expect(response.body).to.have.length(10)
      expect(response).to.have.property('headers')
    })
  })
})
// clean code with fixtures, 