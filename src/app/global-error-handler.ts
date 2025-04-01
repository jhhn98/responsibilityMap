// src/app/global-error-handler.ts
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        console.error('앱에서 오류가 발생했습니다:', error);
    }
}
