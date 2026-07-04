import { Injectable } from '@angular/core';
import {
  Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  signOut, user, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail
} from '@angular/fire/auth';
import { Firestore, doc, setDoc, docData } from '@angular/fire/firestore';
import { Observable, from, switchMap, of } from 'rxjs';
import { UserProfile } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  /** Firebase Auth user stream, null when signed out */
  currentUser$ = user(this.auth);

  /** Full user profile from Firestore */
  userProfile$: Observable<UserProfile | null> = this.currentUser$.pipe(
    switchMap(u => {
      if (!u) return of(null);
      return docData(doc(this.firestore, 'users', u.uid)) as Observable<UserProfile>;
    })
  );

  constructor(private auth: Auth, private firestore: Firestore) {}

  register(email: string, password: string, displayName: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap(async cred => {
        const profile: UserProfile = {
          uid: cred.user.uid, email, displayName,
          role: 'member', joinedAt: new Date()
        };
        await setDoc(doc(this.firestore, 'users', cred.user.uid), profile);
        return profile;
      })
    );
  }

  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  loginWithGoogle() {
    return from(signInWithPopup(this.auth, new GoogleAuthProvider()));
  }

  resetPassword(email: string) {
    return from(sendPasswordResetEmail(this.auth, email));
  }

  logout() {
    return from(signOut(this.auth));
  }
}
