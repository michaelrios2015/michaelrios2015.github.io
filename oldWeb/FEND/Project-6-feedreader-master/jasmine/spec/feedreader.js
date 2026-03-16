/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL defined', function() {
            //loops through allfeeds array 
            allFeeds.forEach(function(feed) {
                //checks to make sure each url in feed is defined
                expect(feed.url).toBeDefined();
                //console.log(feed.url);
                //checks to make sure the url is not empty
                expect(feed.url.length).not.toBe(0);
                //console.log(feed.url.length);
            });

        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Name defined', function() {
            //loops through all feeds
            allFeeds.forEach(function(feed) {
                //checks that feed has a name
                expect(feed.name).toBeDefined();
                //checks to make sure the name is not empty
                expect(feed.name.length).not.toBe(0);
            });

        });
    });

    describe('The menu', function() {
        /* This test that ensures the menu element is
         * hidden by default. 
         */
        
        var body = $('body');
            menu = $('.menu-icon-link');

        it('menu hidden', function() {
            //as long as the body class has menu-hidden class we are OK
            expect(body.hasClass("menu-hidden")).toBeTruthy();

        });

        /* This test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('menu changes on click', function() {
            menu.click();
            //we have clicked the menu icon so menu-hidden class is gone
            expect(body.hasClass("")).toBeTruthy();

            menu.click();
            //we have clicked the menu icon again so menu-hidden class is back
            expect(body.hasClass("menu-hidden")).toBeTruthy();
        });

    });

    describe('Intial Entries', function() {

        //wait for ansynch call to feed to finish
        beforeEach(function(done) {
            loadFeed(0, done);
            });
        
        it('has more than 1 entry', function() {
            //get check number of entries 
            var numberOfEntries = $('.entry').length;
            //make sure it is more than zero
            expect(numberOfEntries).toBeGreaterThan(0);
        });

    });
    
    describe('New Feed Selection', function() {
        /* This test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var first, third;
            feed = $('.feed');

        beforeEach(function(done){
            //load the first feed
            loadFeed(0, function() {
                //hold the text for all h2 in varible first
                first = feed.find('h2').text();

                //load the third feed
                loadFeed(2, function() {
                    //hold the text for all h2 in varible third
                    third = feed.find('h2').text();            
                    done();
                });
            });
    });
        // Bring us back to the first feed (0)
        afterAll(function() {
            loadFeed(0);
        });

        it('changes feed', function() {

            //console.log("first is " + first);

            //console.log("third is " + third);
            //compare first to third make sure they are not equal
            expect(first).not.toEqual(third);
        });
        
        

    });
}());