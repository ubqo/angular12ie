# angular12ie
Test of Angular 12 with IE

**The project is setup to replicate the issue**

Comment the following out to fix the issue

* src/app.module.ts - comment out global declaration
* src/app.module.ts - comment out global provider
* assets/scripts/analytics.js - comment out all javascript code
* src/app/components/first/first.component.ts - comment out call to analytics
* src/app/components/second/second.component.ts - comment out call to analytics

Now run on IE 11, which will now work
