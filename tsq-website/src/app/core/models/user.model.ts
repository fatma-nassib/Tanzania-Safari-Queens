export type UserRole = 'member'|'admin';
export interface UserProfile { uid:string; email:string; displayName:string; photoURL?:string; phone?:string; role:UserRole; joinedAt:any; }
