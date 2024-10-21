import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(
    private firestore: AngularFirestore,
    private firestore2: Firestore
  ) {}
  // Function to send a message to Firestore
  sendMessage(content: string, userId: string): Promise<void> {
    const messageData = {
      content,
      userId,
      timestamp: new Date(),
    };

    // Add the message to the 'messages' collection
    return this.firestore
      .collection('messages')
      .add(messageData)
      .then(() => {
        console.log('Message sent successfully');
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        throw error;
      });
  }
}
