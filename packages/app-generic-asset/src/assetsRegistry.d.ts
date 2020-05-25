import { BehaviorSubject } from 'rxjs';
export interface AssetsSubjectInfo {
    [id: string]: string;
}
declare const _default: {
    getAssets: () => AssetsSubjectInfo[];
    add: (id: string, name: string) => void;
    remove: (id: string) => void;
    subject: BehaviorSubject<AssetsSubjectInfo>;
};
export default _default;
