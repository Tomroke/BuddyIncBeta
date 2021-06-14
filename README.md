
# **Buddy Inc**

MonoRepo for BuddyInc

## **Initializing Buddy Inc MonoRepo**
```
yarn install
```
For the buddy app, `pod install` is also required to run in the ios folder.

## **Running Buddy Inc Applications**
***     
### **Running Buddy Admin**
#### Build Admin Buddy application
```
yarn nx run admin-buddy:build
```
#### Build and serve Admin Buddy application
```
yarn nx run admin-buddy:serve
``` 
#### Start the JavaScript bundler
```
yarn nx start buddy-app
```
#### Run lint on Admin Buddy application
```
yarn nx run admin-buddy:lint
```
#### Run Storybook for Admin Buddy application
```
yarn nx admin-buddy:storybook
```
***
### **Running Buddy App**

#### Begin by starting the JavaScript bundler.
```
npx nx start buddy-app
```
#### Run Buddy App on iOS
```
yarn nx run buddy-app:run-ios
```
#### Alternativlt, run this command if pod install haven't been run yet.
```
yarn nx run-ios buddy-app --install
```
#### Run Buddy App on Android
```
yarn nx run buddy-app:run-android
```
#### Run lint on Buddy App
```
yarn nx run admin-buddy:lint
```
#### Run Storybook for Buddy App
```
yarn nx buddy-app:storybook
```
***
### **Running Relay Cache**
#### Build Relay Cache
```
yarn nx run relay-cache:build
```    
#### Build and serve Relay Cache
```
yarn nx run relay-cache:serve
``` 
#### Run lint on Relay Cach
```
yarn nx run relay-cache:lint
```
### **Running Storybook for Entrire MonoRepo**
```
Yarn nx run shared-components:storybook
```
***
### **Running TestCafe**
```
Comming Soon.
``` 
***
### **Running Detox**
```
Comming Soon.
```