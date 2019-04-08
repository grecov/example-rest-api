Feature: list movies 

Background: 
* url 'http://www.omdbapi.com/'

Scenario: get list of horror movies
    Given path '/'
    And param apikey = 'a03bb1cd'
    And param t = 'the saw'
    When method get
    Then status 200
    And match response.Title == "The Saw"
    And match response.imdbID == "tt5841012"