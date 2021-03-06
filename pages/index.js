import Head from 'next/head'
import Script from 'next/script'
import  {getToken}  from './../Utils/firebase'
import  { useEffect, useState } from "react";
import { useUser } from "../Components/UserContext";
import Landing from '../Components/Landing/Pages/Homepage/Home'


export default function Home() {

  


  return (
    <div>
      <Head>
        <title>U-Connect</title>
        <meta name="description" content="A marketplace for college students" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Landing />

      <Script 
          src='https://service.force.com/embeddedservice/5.0/esw.min.js'
          strategy='beforeInteractive'
          />
        <Script
          strategy='lazyOnload'
        >{`
          console.log('hello');
          
          console.log(window.localStorage.getItem('name'));

          var initESW = function(gslbBaseURL) {
          embedded_svc.settings.displayHelpButton = true; //Or false
          embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'
      
          //embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)
          //embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)
      
          //embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
          //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)
      
          // Settings for Chat
          //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
            // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
            // Returns a valid button ID.
          //};
          //embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
          //embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
          //embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)
      
          embedded_svc.settings.extraPrechatFormDetails = [{
            "transcriptFields":["displayName__c"],
            "label": "Name",
            "value": window.localStorage.getItem("name"),
            "displayToAgent": true
          },
          {
            "transcriptFields":["accessToken__c"],
            "value": window.localStorage.getItem("token"),
            "displayToAgent": false
          },
          {
            "transcriptFields":["emailNew __c"],
            "label": "Email",
            "value": window.localStorage.getItem("email"),
            "displayToAgent": true
          }
          ];
          embedded_svc.settings.enabledFeatures = ['LiveAgent'];
          embedded_svc.settings.entryFeature = 'LiveAgent';
      
          embedded_svc.init(
            'https://brendanoneurflashtest-dev-ed.my.salesforce.com',
            'https://brendanoneuraflashtest-developer-edition.na139.force.com/digitalassistant',
            gslbBaseURL,
            '00D4W000001WvKZ',
            'UConnectQueue',
            {
              baseLiveAgentContentURL: 'https://c.la2-c2-ia5.salesforceliveagent.com/content',
              deploymentId: '5724W0000011G6C',
              buttonId: '5734W000000xOY1',
              baseLiveAgentURL: 'https://d.la2-c2-ia5.salesforceliveagent.com/chat',
              eswLiveAgentDevName: 'UConnectQueue',
              isOfflineSupportEnabled: false
            }
          );
        };
      
        if (!window.embedded_svc) {
          var s = document.createElement('script');
          s.setAttribute('src', 'https://brendanoneurflashtest-dev-ed.my.salesforce.com/embeddedservice/5.0/esw.min.js');
          s.onload = function() {
            initESW(null);
          };
          document.body.appendChild(s);
        } else {
          initESW('https://service.force.com');
        }
      `
          


      


        }</Script>
    </div>
  )
}
