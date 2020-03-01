# LegisLately

LegisLately is a webapp that makes it easier to follow activity in Congress. Unregistered users can search using their address to pull up the names and recent activity of their reps - when logged in, users get the ability to follow particular legislators and get all recent votes in a Twitter-style newsfeed.

## Getting Started

1. Fork and clone the repository to your local machine.
2. Run `bundle install` to install dependencies.
3. You'll need two API keys, both set as environment variables:

   a. the [ProPublica Congress API](https://www.propublica.org/datastore/api/propublica-congress-api)
   
   b. the [Google Civic Information API](https://developers.google.com/civic-information/docs/using_api)
   
[Dotenv](https://github.com/bkeepers/dotenv) is already set up for the app, so all you need to do is create an empty `.env` file in the root folder and add the following lines:
```
export GOOGLE_API_KEY=yourgoogleapikey
export PROPUBLICA_API_KEY=yourpropublicaapikey
```
4. Run `rails s` to start the server.

5. Navigate to `localhost:3000` in your browser.

### Prerequisites

You'll need Ruby and RubyGems installed.

You'll also need PostgreSQL installed locally. Installation varies among systems, but you can find detailed install instructions [here](http://www.postgresguide.com/setup/install.html).

## Running the tests

Run `rspec` to run the test suite. 

## Built With

* [Rails 5](http://rubyonrails.org/) - Everyone's favorite Ruby back end web framework
* [AngularJS 1.5](https://angularjs.org/) - Front end Javascript framework for dynamic web apps
* [Bootstrap 3](http://getbootstrap.com/) - CSS framework for developing good-looking, mobile-friendly websites
* [Devise](https://github.com/plataformatec/devise) - A flexible authentication engine for Rails apps

## Contributing

Bug reports and pull requests are welcome at [https://github.com/radditude/legislately](https://github.com/radditude/legislately). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Convenant](http://contributor-covenant.org/version/1/4/) code of conduct.

## Authors

**CJ Horton** - [radditude](https://github.com/radditude)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Big thanks to the folks at ProPublica for answering my questions while they were in the middle of taking over the Sunlight Labs Congress API
* Equally big thanks to the folks of the now-former Sunlight Labs for their excellent Congress API, which originally gave me the idea for this app
* Jesse Novotny's excellent [Rails/Angular/Devise tutorial](https://www.sitepoint.com/setting-up-an-angular-spa-on-rails-with-devise-and-bootstrap/) was a big help with getting the Angular/Devise interactions to function properly.
