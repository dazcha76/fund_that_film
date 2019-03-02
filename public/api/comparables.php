/* 
this file is the endpoint that the client will reach when they submit their project details provided by the user

we expect a string from the fields film 1 and film 2
    we need to sanitize the string and store it as variables outside of the sql query

we will now make the call to the database passing it the query, the varaibles, callback function
    we will use the get method?
    we will pass the SELECT query and variables as a prepared statment to the database
    the query
        will search through the database comparables table for a matching titles
        if titles are found then we would then get the information for the funding_partners and 
            the ditribution_companies tables, this would entail a join

        if the titles are not found in the database then we make a call the the api The Movie Database to retrieve the information about the films
            then we send out an  INSERT query that will store the information into comparables table
            but also prepare the data to be sent out to the client 


    when sending back to the client we want to restructure the data recieved from the database (or the movie databse) into the approved the dummy data object 

    then we json-ify the ibject and send it back to the client

*/