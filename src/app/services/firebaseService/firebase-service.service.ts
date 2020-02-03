import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
 
export class FirebaseServiceService {
 
  constructor(private firestore: AngularFirestore) { }
 
 
  create_NewStudent(record) {
    return this.firestore.collection('Students').add(record);
  }
  read_bookList() {
    return this.firestore.collection('books').snapshotChanges();
  }
 
  read_Students() {
    return this.firestore.collection('Students').snapshotChanges();
  }
  read_NoteBookItems() {
    return this.firestore.collection('NoteBookItems').snapshotChanges();
  }
  read_noteBookAccesories() {
    return this.firestore.collection('noteBookAccesories').snapshotChanges();
  }
  read_schollBags() {
    return this.firestore.collection('schollBags').snapshotChanges();
  }
  read_schollUiniforms() {
    return this.firestore.collection('schollUiniforms').snapshotChanges();
  }
  read_schollTifinBoxs() {
    return this.firestore.collection('schollTifinBoxs').snapshotChanges();
  }
  read_inventoryBookList() {
    return this.firestore.collection('inventoryBookList').snapshotChanges();
  }
  read_cartItems() {
    return this.firestore.collection('cartItems').snapshotChanges();
  }
  update_cartItems(recordID,record){
    this.firestore.doc('cartItems/' + recordID).update(record);
  }
  add_cartItem(item){
    return this.firestore.collection('cartItems').add(item);
  }
  delete_cartItem(record_id) {
    this.firestore.doc('cartItems/' + record_id).delete();
  }
  delete_inventoryBookList(record_id) {
    this.firestore.doc('inventoryBookList/' + record_id).delete();
  }
  read_orderList() {
    return this.firestore.collection('orderList').snapshotChanges();
  }
  create_SchoolList(record) {
    return this.firestore.collection('my-school-list').add(record);
  }
  create_User(record) {
    return this.firestore.collection('user').add(record);
  }
  getUser(){
    return this.firestore.collection('user').snapshotChanges();
  }
  read_User(record) {
    let usercollection = this.firestore.collection('/user', ref => ref.where("email", "==", record));
    return usercollection.snapshotChanges();
    // this.firestore.collection("cities").where("capital", "==", true)
    // .get()
    // .then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // })
    // .catch(function(error) {
    //     console.log("Error getting documents: ", error);
    // });
    //var myUserId = firebase.auth().currentUser.uid;
    // var myReviews = this.firestore.collection('user');
    // var query = myReviews.where()
    //   .where('author', '==', myUserId);
    // myReviews.get().then(function (querySnapshot) {
    //    // Do something with these reviews!
    // })
    // return this.firestore.collectionGroup("user").where("email", "==", "utsahpaikray@gmail.com");;
  }
  checkCartItem(id){
    let AvailableCartItem = this.firestore.collection('/cartItems', ref => ref.where("id", "==", id));
    return AvailableCartItem.snapshotChanges();
  }
  update_user(recordID,record){
    this.firestore.doc('user/' + recordID).update(record);
  }
  read_SchoolList() {
    return this.firestore.collection('my-school-list').snapshotChanges();
  }
  update_Student(recordID,record){
    this.firestore.doc('Students/' + recordID).update(record);
  }
 
  delete_Student(record_id) {
    this.firestore.doc('Students/' + record_id).delete();
  }
  pushBookStoreItems(item,endPoint){
   // return this.firestore.collection('NoteBookItems').add(item);
   //return this.firestore.collection('noteBookAccesories').add(item);
  // return this.firestore.collection('schollBags').add(item);
   // return this.firestore.collection('schollUiniforms').add(item);
   return this.firestore.collection(endPoint).add(item);
    
  }
}