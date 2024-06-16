import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"enkod-test","appId":"1:576317204421:web:e95fa41290122fcfcc8dac","databaseURL":"https://enkod-test-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"enkod-test.appspot.com","apiKey":"AIzaSyDLauwAIJIuygq59cy-EREP_hrS5-ysH9g","authDomain":"enkod-test.firebaseapp.com","messagingSenderId":"576317204421"})), provideAuth(() => getAuth()), provideDatabase(() => getDatabase()), provideFirebaseApp(() => initializeApp({"projectId":"enkod-test","appId":"1:576317204421:web:e95fa41290122fcfcc8dac","databaseURL":"https://enkod-test-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"enkod-test.appspot.com","apiKey":"AIzaSyDLauwAIJIuygq59cy-EREP_hrS5-ysH9g","authDomain":"enkod-test.firebaseapp.com","messagingSenderId":"576317204421"})), provideAuth(() => getAuth()), provideDatabase(() => getDatabase())]
};
