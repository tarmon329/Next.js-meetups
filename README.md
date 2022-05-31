# Next.js Meetups
The "Meetups"  app allows you to add a meetup place with an image, address and description. Once added, the meetup is added to the entire list of meetups , where  everyone can see it.

It was  created with Next.js as the frontend and MongoDB as the DB, hosted on Netlify.
* Change MONGO_CREDENTIALS to yours in order to run it too.

# [`The Client`](pages/index.js):
```javascript
npm install
npm run build
npm start
```

## pages:
### [`All Meetups page`](pages/index.js):
![image](https://user-images.githubusercontent.com/97041347/171215892-47491f45-86b5-45fd-83a9-596ba29c059b.png)

### [`Single Meetup page`](pages/[meetupId]/index.js):
![image](https://user-images.githubusercontent.com/97041347/171218903-29f3c0d7-a258-4da0-8455-0c40c2f1c1aa.png)

### [`New Meetup page`](pages/new-meetup/index.js):
![image](https://user-images.githubusercontent.com/97041347/171219162-dbbbfe2e-de40-4afd-94ca-53b9f1c476f5.png)

[Live Site](https://nextjs-meetups.netlify.app/)
