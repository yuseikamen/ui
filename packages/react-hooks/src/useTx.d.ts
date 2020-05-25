import { TxDef, TxSource, TxProps, TxState } from './types';
export default function useTx<T extends TxDef>(memoFn: (...args: any[]) => TxSource<T>, memoArr: any[], { accountId: anAccountId, onChangeAccountId, onStart, onSuccess, onFailed, onUpdate }?: TxProps): TxState;
