// This is setting up of database

const db = firebase.firestore() ;

// db.settings = firebase.firestore( { timestampsInSnapshots : true  } ) ;

db.collection('usersEmailPassword').get().then( (snapshot) => {

     snapshot.forEach( ( doc ) => {
         console.log( doc.data() ) ;
     } )

} )

db.collection( 'usersEmailPassword' ).add( {
    Email : 'hrithik.sh.22@gmail.com' ,
    Password : '12345678'
} ) ;
