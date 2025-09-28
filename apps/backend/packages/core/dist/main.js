/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./libs/dtos/src/find-all-response.dto.ts":
/*!************************************************!*\
  !*** ./libs/dtos/src/find-all-response.dto.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllResponseDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const pagination_meta_dto_1 = __webpack_require__(/*! ./pagination-meta.dto */ "./libs/dtos/src/pagination-meta.dto.ts");
class FindAllResponseDto {
    data;
    pagination;
}
exports.FindAllResponseDto = FindAllResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ isArray: true }),
    __metadata("design:type", Array)
], FindAllResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => pagination_meta_dto_1.PaginationMetaDto }),
    __metadata("design:type", typeof (_a = typeof pagination_meta_dto_1.PaginationMetaDto !== "undefined" && pagination_meta_dto_1.PaginationMetaDto) === "function" ? _a : Object)
], FindAllResponseDto.prototype, "pagination", void 0);


/***/ }),

/***/ "./libs/dtos/src/index.ts":
/*!********************************!*\
  !*** ./libs/dtos/src/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./find-all-response.dto */ "./libs/dtos/src/find-all-response.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./pagination-meta.dto */ "./libs/dtos/src/pagination-meta.dto.ts"), exports);


/***/ }),

/***/ "./libs/dtos/src/pagination-meta.dto.ts":
/*!**********************************************!*\
  !*** ./libs/dtos/src/pagination-meta.dto.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginationMetaDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class PaginationMetaDto {
    total;
    skip;
    take;
    hasNextPage;
}
exports.PaginationMetaDto = PaginationMetaDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "take", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], PaginationMetaDto.prototype, "hasNextPage", void 0);


/***/ }),

/***/ "./libs/logging/src/index.ts":
/*!***********************************!*\
  !*** ./libs/logging/src/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./logging.module */ "./libs/logging/src/logging.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./logging.service */ "./libs/logging/src/logging.service.ts"), exports);


/***/ }),

/***/ "./libs/logging/src/logging.module.ts":
/*!********************************************!*\
  !*** ./libs/logging/src/logging.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggingModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const logging_service_1 = __webpack_require__(/*! ./logging.service */ "./libs/logging/src/logging.service.ts");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
let LoggingModule = class LoggingModule {
};
exports.LoggingModule = LoggingModule;
exports.LoggingModule = LoggingModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        providers: [logging_service_1.LoggingService],
        exports: [logging_service_1.LoggingService],
    })
], LoggingModule);


/***/ }),

/***/ "./libs/logging/src/logging.service.ts":
/*!*********************************************!*\
  !*** ./libs/logging/src/logging.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggingService = void 0;
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let LoggingService = class LoggingService extends common_1.ConsoleLogger {
    httpService;
    constructor(context, options, httpService) {
        super(context, options);
        this.httpService = httpService;
    }
    async shipLogs(message, ...optionalParams) {
        try {
            await (0, rxjs_1.lastValueFrom)(this.httpService.get('https://dummyjson.com/posts'));
            this.log(`${this.constructor.name}.${this.shipLogs.name}`, message, ...optionalParams);
        }
        catch (err) {
            this.error(`${this.constructor.name}.${this.shipLogs.name} caught an exception`, {
                correlationId: '959e0817-023e-414c-98ee-252527126fba',
                err: JSON.stringify(err),
            });
        }
    }
    log(message, ...optionalParams) {
        super.log(message, ...optionalParams);
    }
    fatal(message, ...optionalParams) {
        super.fatal(message, ...optionalParams);
    }
    error(message, ...optionalParams) {
        super.error(message, ...optionalParams);
    }
    warn(message, ...optionalParams) {
        super.warn(message, ...optionalParams);
    }
    debug(message, ...optionalParams) {
        super.debug(message, ...optionalParams);
    }
    verbose(message, ...optionalParams) {
        super.verbose(message, ...optionalParams);
    }
};
exports.LoggingService = LoggingService;
exports.LoggingService = LoggingService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(axios_1.HttpService)),
    __metadata("design:paramtypes", [String, Object, typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object])
], LoggingService);


/***/ }),

/***/ "./src/guards/api-auth.guard.ts":
/*!**************************************!*\
  !*** ./src/guards/api-auth.guard.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiKeyGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const crypto = __importStar(__webpack_require__(/*! crypto */ "crypto"));
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
let ApiKeyGuard = class ApiKeyGuard {
    logger;
    configService;
    constructor(logger, configService) {
        this.logger = logger;
        this.configService = configService;
    }
    _verifySignature(secret, signature, timestamp) {
        const hmac = crypto.createHmac('sha256', secret);
        hmac.update(timestamp);
        const expectedSignature = hmac.digest('hex');
        return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
    }
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const apiKey = req.headers['x-api-key'];
        const signature = req.headers['x-signature'];
        const timestamp = req.headers['x-timestamp'];
        const internalSecret = this.configService.get('API_SECRET');
        if (!apiKey || !signature || !timestamp) {
            throw new common_1.UnauthorizedException('Missing required headers');
        }
        const now = Date.now();
        if (Math.abs(now - Number(timestamp)) > 5 * 60 * 1000) {
            throw new common_1.UnauthorizedException('Request expired');
        }
        if (!this._verifySignature(internalSecret, signature, timestamp)) {
            throw new common_1.UnauthorizedException('Invalid signature');
        }
        req.user = { apiKey };
        return true;
    }
};
exports.ApiKeyGuard = ApiKeyGuard;
exports.ApiKeyGuard = ApiKeyGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, common_1.Inject)(config_1.ConfigService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], ApiKeyGuard);


/***/ }),

/***/ "./src/guards/jwt-auth.guard.ts":
/*!**************************************!*\
  !*** ./src/guards/jwt-auth.guard.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);


/***/ }),

/***/ "./src/guards/local-auth.guard.ts":
/*!****************************************!*\
  !*** ./src/guards/local-auth.guard.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let LocalAuthGuard = class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
};
exports.LocalAuthGuard = LocalAuthGuard;
exports.LocalAuthGuard = LocalAuthGuard = __decorate([
    (0, common_1.Injectable)()
], LocalAuthGuard);


/***/ }),

/***/ "./src/guards/logging-thottler.guard.ts":
/*!**********************************************!*\
  !*** ./src/guards/logging-thottler.guard.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggingThrottlerGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
let LoggingThrottlerGuard = class LoggingThrottlerGuard extends throttler_1.ThrottlerGuard {
    logger;
    constructor(options, storageService, reflector, logger) {
        super(options, storageService, reflector);
        this.logger = logger;
    }
    async canActivate(context) {
        const allowed = await super.canActivate(context);
        this.logger.debug(`${this.constructor.name}.${this.canActivate.name}`, {
            correlationId: 'a4b5ece4-dcae-43f7-838b-e75b241b9e2e',
            allowed,
        });
        return allowed;
    }
};
exports.LoggingThrottlerGuard = LoggingThrottlerGuard;
exports.LoggingThrottlerGuard = LoggingThrottlerGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof throttler_1.ThrottlerStorage !== "undefined" && throttler_1.ThrottlerStorage) === "function" ? _a : Object, typeof (_b = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _b : Object, typeof (_c = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _c : Object])
], LoggingThrottlerGuard);


/***/ }),

/***/ "./src/guards/policies.guard.ts":
/*!**************************************!*\
  !*** ./src/guards/policies.guard.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PoliciesGuard = exports.CheckPolicies = exports.CHECK_POLICIES_KEY = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const casl_ability_factory_1 = __webpack_require__(/*! src/modules/casl/casl-ability.factory/casl-ability.factory */ "./src/modules/casl/casl-ability.factory/casl-ability.factory.ts");
exports.CHECK_POLICIES_KEY = 'check_policy';
const CheckPolicies = (...handlers) => (0, common_1.SetMetadata)(exports.CHECK_POLICIES_KEY, handlers);
exports.CheckPolicies = CheckPolicies;
let PoliciesGuard = class PoliciesGuard {
    reflector;
    caslAbilityFactory;
    logger;
    constructor(reflector, caslAbilityFactory, logger) {
        this.reflector = reflector;
        this.caslAbilityFactory = caslAbilityFactory;
        this.logger = logger;
    }
    async canActivate(context) {
        const policyHandlers = this.reflector.get(exports.CHECK_POLICIES_KEY, context.getHandler()) || [];
        const { user } = context
            .switchToHttp()
            .getRequest();
        this.logger.debug(`${this.constructor.name}.${this.canActivate.name}`, {
            correlationId: '75be8396-f6b7-42fd-b413-67efae3d889c',
            user: JSON.stringify(user),
        });
        const ability = await this.caslAbilityFactory.createForUser(user.sub);
        return policyHandlers.every((handler) => this.execPolicyHandler(handler, ability));
    }
    execPolicyHandler(handler, ability) {
        if (typeof handler === 'function') {
            return handler(ability);
        }
        return handler.handle(ability);
    }
};
exports.PoliciesGuard = PoliciesGuard;
exports.PoliciesGuard = PoliciesGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object, typeof (_b = typeof casl_ability_factory_1.CaslAbilityFactory !== "undefined" && casl_ability_factory_1.CaslAbilityFactory) === "function" ? _b : Object, typeof (_c = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _c : Object])
], PoliciesGuard);


/***/ }),

/***/ "./src/interceptors/logging-cache.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/interceptors/logging-cache.interceptor.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControllerCacheInterceptor = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const cache_manager_1 = __webpack_require__(/*! @nestjs/cache-manager */ "@nestjs/cache-manager");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
let ControllerCacheInterceptor = class ControllerCacheInterceptor extends cache_manager_1.CacheInterceptor {
    logger;
    constructor(cacheManager, reflector, logger) {
        super(cacheManager, reflector);
        this.logger = logger;
    }
    trackBy(context) {
        const baseKey = super.trackBy(context);
        if (!baseKey)
            return undefined;
        const request = context
            .switchToHttp()
            .getRequest();
        const userId = request.user?.id;
        const key = userId ? `${userId}:${baseKey}` : baseKey;
        this.logger.debug(`${this.constructor.name}.${this.trackBy.name}`, {
            correlationId: '159b8055-b731-46f3-88e8-0ede0576a2e8',
            key,
        });
        return key;
    }
};
exports.ControllerCacheInterceptor = ControllerCacheInterceptor;
exports.ControllerCacheInterceptor = ControllerCacheInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object, typeof (_b = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _b : Object])
], ControllerCacheInterceptor);


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const compression_1 = __importDefault(__webpack_require__(/*! compression */ "compression"));
const helmet_1 = __importDefault(__webpack_require__(/*! helmet */ "helmet"));
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const app_module_1 = __webpack_require__(/*! ./modules/app.module */ "./src/modules/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {});
    const configService = app.get(config_1.ConfigService);
    const httpService = app.get(axios_1.HttpService);
    app.enableVersioning({
        type: common_1.VersioningType.URI,
    });
    app.setGlobalPrefix('api/core');
    app.useLogger(new logging_1.LoggingService('core-service', {}, httpService));
    app.use((0, compression_1.default)());
    app.use((0, helmet_1.default)());
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.enableCors();
    app.set('trust proxy', 'loopback');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Core API')
        .setDescription('The Core API.')
        .setVersion('1.0')
        .addTag('core')
        .addBearerAuth()
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, documentFactory);
    await app.listen(configService.get('PORT') ?? 3000);
}
void bootstrap();


/***/ }),

/***/ "./src/modules/account/account.controller.ts":
/*!***************************************************!*\
  !*** ./src/modules/account/account.controller.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountController = void 0;
const dtos_1 = __webpack_require__(/*! @app/dtos */ "./libs/dtos/src/index.ts");
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! src/guards/jwt-auth.guard */ "./src/guards/jwt-auth.guard.ts");
const policies_guard_1 = __webpack_require__(/*! src/guards/policies.guard */ "./src/guards/policies.guard.ts");
const logging_cache_interceptor_1 = __webpack_require__(/*! src/interceptors/logging-cache.interceptor */ "./src/interceptors/logging-cache.interceptor.ts");
const account_service_1 = __webpack_require__(/*! ./account.service */ "./src/modules/account/account.service.ts");
const account_created_command_1 = __webpack_require__(/*! ./commands/account-created.command */ "./src/modules/account/commands/account-created.command.ts");
const create_account_dto_1 = __webpack_require__(/*! ./dto/create-account.dto */ "./src/modules/account/dto/create-account.dto.ts");
const update_account_dto_1 = __webpack_require__(/*! ./dto/update-account.dto */ "./src/modules/account/dto/update-account.dto.ts");
const account_entity_1 = __webpack_require__(/*! ./entities/account.entity */ "./src/modules/account/entities/account.entity.ts");
const casl_ability_factory_1 = __webpack_require__(/*! ../casl/casl-ability.factory/casl-ability.factory */ "./src/modules/casl/casl-ability.factory/casl-ability.factory.ts");
const account_mapper_1 = __webpack_require__(/*! ./dto/account.mapper */ "./src/modules/account/dto/account.mapper.ts");
const account_removed_command_1 = __webpack_require__(/*! ./commands/account-removed.command */ "./src/modules/account/commands/account-removed.command.ts");
const account_updated_command_1 = __webpack_require__(/*! ./commands/account-updated.command */ "./src/modules/account/commands/account-updated.command.ts");
let AccountController = class AccountController {
    logger;
    service;
    mapper;
    commandBus;
    caslAbilityFactory;
    constructor(logger, service, mapper, commandBus, caslAbilityFactory) {
        this.logger = logger;
        this.service = service;
        this.mapper = mapper;
        this.commandBus = commandBus;
        this.caslAbilityFactory = caslAbilityFactory;
    }
    async create(createAccountDto, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        if (!ability.can(casl_ability_factory_1.Action.Create, account_entity_1.Account)) {
            throw new common_1.UnauthorizedException();
        }
        const result = await this.service.create(createAccountDto, req.user.id);
        void this.commandBus.execute(new account_created_command_1.AccountCreatedCommand(result));
        return this.mapper.toInterface(result);
    }
    async findAll(skip = 0, take = 100, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        const result = await this.service.findAll(skip, take);
        return {
            ...result,
            data: result.data
                .filter((entity) => ability.can(casl_ability_factory_1.Action.Read, entity))
                .map((entity) => this.mapper.toInterface(entity)),
        };
    }
    async findOne(id, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        const entity = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Read, entity)) {
            throw new common_1.UnauthorizedException();
        }
        return this.mapper.toInterface(entity);
    }
    async update(id, updateAccountDto, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        const entity = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Update, entity)) {
            throw new common_1.UnauthorizedException();
        }
        const result = await this.service.update(id, updateAccountDto, req.user.id);
        void this.commandBus.execute(new account_updated_command_1.AccountUpdatedCommand(result));
        return this.mapper.toInterface(result);
    }
    async remove(id, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        const entity = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Delete, entity)) {
            throw new common_1.UnauthorizedException();
        }
        const result = await this.service.remove(id, req.user.id);
        void this.commandBus.execute(new account_removed_command_1.AccountRemovedCommand(result));
        return result.id;
    }
};
exports.AccountController = AccountController;
__decorate([
    (0, common_1.Post)(),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Create, account_entity_1.Account)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof create_account_dto_1.CreateAccountDto !== "undefined" && create_account_dto_1.CreateAccountDto) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Read, account_entity_1.Account)),
    (0, swagger_1.ApiQuery)({ name: 'skip', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'take', required: false, type: Number }),
    (0, swagger_1.ApiOkResponse)({ type: dtos_1.FindAllResponseDto }),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], AccountController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Read, account_entity_1.Account)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Update, account_entity_1.Account)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_h = typeof update_account_dto_1.UpdateAccountDto !== "undefined" && update_account_dto_1.UpdateAccountDto) === "function" ? _h : Object, Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Delete, account_entity_1.Account)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "remove", null);
exports.AccountController = AccountController = __decorate([
    (0, common_1.Controller)({ path: 'accounts', version: '1' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, policies_guard_1.PoliciesGuard),
    (0, common_1.UseInterceptors)(logging_cache_interceptor_1.ControllerCacheInterceptor, common_1.ClassSerializerInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, common_1.Inject)(account_service_1.AccountService)),
    __param(2, (0, common_1.Inject)(account_mapper_1.AccountMapper)),
    __param(3, (0, common_1.Inject)(cqrs_1.CommandBus)),
    __param(4, (0, common_1.Inject)(casl_ability_factory_1.CaslAbilityFactory)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof account_service_1.AccountService !== "undefined" && account_service_1.AccountService) === "function" ? _b : Object, typeof (_c = typeof account_mapper_1.AccountMapper !== "undefined" && account_mapper_1.AccountMapper) === "function" ? _c : Object, typeof (_d = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _d : Object, typeof (_e = typeof casl_ability_factory_1.CaslAbilityFactory !== "undefined" && casl_ability_factory_1.CaslAbilityFactory) === "function" ? _e : Object])
], AccountController);


/***/ }),

/***/ "./src/modules/account/account.module.ts":
/*!***********************************************!*\
  !*** ./src/modules/account/account.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountModule = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const account_controller_1 = __webpack_require__(/*! ./account.controller */ "./src/modules/account/account.controller.ts");
const account_service_1 = __webpack_require__(/*! ./account.service */ "./src/modules/account/account.service.ts");
const account_mapper_1 = __webpack_require__(/*! ./dto/account.mapper */ "./src/modules/account/dto/account.mapper.ts");
const account_model_1 = __webpack_require__(/*! ./entities/account.model */ "./src/modules/account/entities/account.model.ts");
const account_created_handler_1 = __webpack_require__(/*! ./handlers/account-created.handler */ "./src/modules/account/handlers/account-created.handler.ts");
const account_removed_handler_1 = __webpack_require__(/*! ./handlers/account-removed.handler */ "./src/modules/account/handlers/account-removed.handler.ts");
const account_updated_handler_1 = __webpack_require__(/*! ./handlers/account-updated.handler */ "./src/modules/account/handlers/account-updated.handler.ts");
const casl_module_1 = __webpack_require__(/*! ../casl/casl.module */ "./src/modules/casl/casl.module.ts");
let AccountModule = class AccountModule {
};
exports.AccountModule = AccountModule;
exports.AccountModule = AccountModule = __decorate([
    (0, common_1.Module)({
        imports: [logging_1.LoggingModule, typeorm_1.TypeOrmModule.forFeature([account_model_1.Account]), casl_module_1.CaslModule],
        controllers: [account_controller_1.AccountController],
        providers: [
            account_mapper_1.AccountMapper,
            account_service_1.AccountService,
            account_created_handler_1.AccountCreatedHandler,
            account_updated_handler_1.AccountUpdatedHandler,
            account_removed_handler_1.AccountRemovedHandler,
        ],
        exports: [account_service_1.AccountService],
    })
], AccountModule);


/***/ }),

/***/ "./src/modules/account/account.service.ts":
/*!************************************************!*\
  !*** ./src/modules/account/account.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountService = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const account_mapper_1 = __webpack_require__(/*! ./dto/account.mapper */ "./src/modules/account/dto/account.mapper.ts");
const account_model_1 = __webpack_require__(/*! ./entities/account.model */ "./src/modules/account/entities/account.model.ts");
let AccountService = class AccountService {
    logger;
    repo;
    mapper;
    constructor(logger, repo, mapper) {
        this.logger = logger;
        this.repo = repo;
        this.mapper = mapper;
    }
    async createWithManager(createAccountDto, manager) {
        const repo = manager.getRepository(account_model_1.Account);
        const entity = repo.create({ ...createAccountDto });
        const result = await repo.save(entity);
        return this.mapper.toDomain(result);
    }
    async create(createAccountDto, createdBy) {
        const entity = this.repo.create({ ...createAccountDto, createdBy });
        const result = await this.repo.save(entity);
        return this.mapper.toDomain(result);
    }
    async findAll(skip = 0, take = 100) {
        try {
            const [entities, count] = await this.repo.findAndCount({
                skip,
                take,
            });
            return {
                data: entities.map((entity) => this.mapper.toDomain(entity)),
                pagination: {
                    total: count,
                    skip,
                    take,
                    hasNextPage: skip + take < count,
                },
            };
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.findAll.name} encountered an error`, {
                correlationId: '56268dfa-a78d-4865-8d03-504515d8287c',
                err: JSON.stringify(err),
            });
            return {
                data: [],
                pagination: { total: 0, skip: 0, take, hasNextPage: false },
            };
        }
    }
    async findOne(id) {
        try {
            const model = await this.repo.findOneBy({ id });
            if (!model) {
                throw new common_1.NotFoundException();
            }
            return this.mapper.toDomain(model);
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.findOne.name} encountered an error`, {
                correlationId: 'f64ea9bf-6aae-4b87-9629-d7fe14f6c1d8',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async updateWithManager(id, updateAccountDto, manager) {
        try {
            const repo = manager.getRepository(account_model_1.Account);
            const model = await repo.findOneBy({ id });
            if (!model) {
                throw new common_1.NotFoundException();
            }
            const entity = this.mapper.toDomain(model);
            if (updateAccountDto.name) {
                entity.updateName(updateAccountDto.name);
            }
            if (updateAccountDto.createdBy) {
                entity.updateOwner(updateAccountDto.createdBy);
            }
            if (updateAccountDto.updatedBy) {
                entity.updateUpdatedBy(updateAccountDto.updatedBy);
            }
            await repo.update(entity.id, this.mapper.toPersistence(entity));
            return entity;
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.updateWithManager.name} encountered an error`, {
                correlationId: '64746231-a49d-46eb-b945-967b18e309f0',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async update(id, updateAccountDto, updatedBy) {
        try {
            const entity = await this.findOne(id);
            if (updateAccountDto.name) {
                entity.updateName(updateAccountDto.name);
            }
            if (updateAccountDto.createdBy) {
                entity.updateOwner(updateAccountDto.createdBy);
            }
            entity.updateUpdatedBy(updatedBy);
            await this.repo.update(entity.id, this.mapper.toPersistence(entity));
            return entity;
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.update.name} encountered an error`, {
                correlationId: '6befde88-ff55-4a59-9c7b-8b47a5980dd4',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async remove(id, removedBy) {
        try {
            const entity = await this.findOne(id);
            entity.softDelete(removedBy);
            await this.repo.update(entity.id, this.mapper.toPersistence(entity));
            return entity;
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.remove.name} encountered an error`, {
                correlationId: 'c66f2ab8-2721-44f7-ba05-daa1aaf1b764',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
};
exports.AccountService = AccountService;
exports.AccountService = AccountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, typeorm_1.InjectRepository)(account_model_1.Account)),
    __param(2, (0, common_1.Inject)(account_mapper_1.AccountMapper)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof account_mapper_1.AccountMapper !== "undefined" && account_mapper_1.AccountMapper) === "function" ? _c : Object])
], AccountService);


/***/ }),

/***/ "./src/modules/account/commands/account-created.command.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/account/commands/account-created.command.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountCreatedCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
class AccountCreatedCommand extends cqrs_1.Command {
    entity;
    constructor(entity) {
        super();
        this.entity = entity;
    }
}
exports.AccountCreatedCommand = AccountCreatedCommand;


/***/ }),

/***/ "./src/modules/account/commands/account-removed.command.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/account/commands/account-removed.command.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountRemovedCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
class AccountRemovedCommand extends cqrs_1.Command {
    entity;
    constructor(entity) {
        super();
        this.entity = entity;
    }
}
exports.AccountRemovedCommand = AccountRemovedCommand;


/***/ }),

/***/ "./src/modules/account/commands/account-updated.command.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/account/commands/account-updated.command.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountUpdatedCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
class AccountUpdatedCommand extends cqrs_1.Command {
    entity;
    constructor(entity) {
        super();
        this.entity = entity;
    }
}
exports.AccountUpdatedCommand = AccountUpdatedCommand;


/***/ }),

/***/ "./src/modules/account/dto/account.dto.ts":
/*!************************************************!*\
  !*** ./src/modules/account/dto/account.dto.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class AccountDto {
    constructor(partial) {
        Object.assign(this, partial);
    }
    name;
    createdBy;
    updatedBy;
    deletedBy;
    createdAt;
    updatedAt;
    deletedAt;
}
exports.AccountDto = AccountDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the account' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AccountDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AccountDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AccountDto.prototype, "updatedBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AccountDto.prototype, "deletedBy", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], AccountDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], AccountDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], AccountDto.prototype, "deletedAt", void 0);


/***/ }),

/***/ "./src/modules/account/dto/account.mapper.ts":
/*!***************************************************!*\
  !*** ./src/modules/account/dto/account.mapper.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AccountMapper_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountMapper = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const account_entity_1 = __webpack_require__(/*! ../entities/account.entity */ "./src/modules/account/entities/account.entity.ts");
const account_dto_1 = __webpack_require__(/*! ./account.dto */ "./src/modules/account/dto/account.dto.ts");
let AccountMapper = AccountMapper_1 = class AccountMapper {
    static toInterface(entity) {
        return new account_dto_1.AccountDto(entity.props);
    }
    toInterface(entity) {
        return AccountMapper_1.toInterface(entity);
    }
    static toDomain(model) {
        return new account_entity_1.Account({
            ...model,
        });
    }
    toDomain(model) {
        return AccountMapper_1.toDomain(model);
    }
    static toPersistence(entity) {
        return {
            ...entity.props,
        };
    }
    toPersistence(entity) {
        return AccountMapper_1.toPersistence(entity);
    }
};
exports.AccountMapper = AccountMapper;
exports.AccountMapper = AccountMapper = AccountMapper_1 = __decorate([
    (0, common_1.Injectable)()
], AccountMapper);


/***/ }),

/***/ "./src/modules/account/dto/create-account.dto.ts":
/*!*******************************************************!*\
  !*** ./src/modules/account/dto/create-account.dto.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAccountDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateAccountDto {
    name;
    createdBy;
    updatedBy;
    deletedBy;
    createdAt;
    updatedAt;
    deletedAt;
}
exports.CreateAccountDto = CreateAccountDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the account' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "updatedBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "deletedBy", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateAccountDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateAccountDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], CreateAccountDto.prototype, "deletedAt", void 0);


/***/ }),

/***/ "./src/modules/account/dto/update-account.dto.ts":
/*!*******************************************************!*\
  !*** ./src/modules/account/dto/update-account.dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAccountDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_account_dto_1 = __webpack_require__(/*! ./create-account.dto */ "./src/modules/account/dto/create-account.dto.ts");
class UpdateAccountDto extends (0, mapped_types_1.PartialType)(create_account_dto_1.CreateAccountDto) {
}
exports.UpdateAccountDto = UpdateAccountDto;


/***/ }),

/***/ "./src/modules/account/entities/account.entity.ts":
/*!********************************************************!*\
  !*** ./src/modules/account/entities/account.entity.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Account = void 0;
class Account {
    props;
    constructor(props) {
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
            updatedAt: props.updatedAt ?? new Date(),
        };
    }
    get id() {
        return this.props.id;
    }
    get name() {
        return this.props.name;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    get deletedAt() {
        return this.props.deletedAt;
    }
    get createdBy() {
        return this.props.createdBy;
    }
    get updatedBy() {
        return this.props.updatedBy;
    }
    get deletedBy() {
        return this.props.deletedBy;
    }
    updateName(newName) {
        this.props.name = newName;
        this.touch();
    }
    updateOwner(id) {
        this.props.createdBy = id;
        this.touch();
    }
    updateUpdatedBy(id) {
        this.touch(id);
    }
    softDelete(byUserId) {
        this.props.deletedAt = new Date();
        if (byUserId) {
            this.props.deletedBy = byUserId;
        }
    }
    restore() {
        this.props.deletedAt = undefined;
        this.props.deletedBy = undefined;
    }
    touch(updatedBy) {
        this.props.updatedAt = new Date();
        if (updatedBy) {
            this.props.updatedBy = updatedBy;
        }
    }
}
exports.Account = Account;


/***/ }),

/***/ "./src/modules/account/entities/account.model.ts":
/*!*******************************************************!*\
  !*** ./src/modules/account/entities/account.model.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Account = void 0;
const app_model_1 = __webpack_require__(/*! src/modules/app/entities/app.model */ "./src/modules/app/entities/app.model.ts");
const department_model_1 = __webpack_require__(/*! src/modules/department/entities/department.model */ "./src/modules/department/entities/department.model.ts");
const integration_model_1 = __webpack_require__(/*! src/modules/integration/entities/integration.model */ "./src/modules/integration/entities/integration.model.ts");
const subscription_model_1 = __webpack_require__(/*! src/modules/subscription/entities/subscription.model */ "./src/modules/subscription/entities/subscription.model.ts");
const user_model_1 = __webpack_require__(/*! src/modules/user/entities/user.model */ "./src/modules/user/entities/user.model.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Account = class Account {
    id;
    name;
    users;
    departments;
    apps;
    integrations;
    subscriptions;
    createdAt;
    createdBy;
    updatedAt;
    updatedBy;
    deletedAt;
    deletedBy;
};
exports.Account = Account;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Account.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Account.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_model_1.User, (user) => user.account, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Account.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => department_model_1.Department, (relation) => relation.account, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Account.prototype, "departments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => app_model_1.App, (relation) => relation.account, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Account.prototype, "apps", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => integration_model_1.Integration, (relation) => relation.account, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Account.prototype, "integrations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => subscription_model_1.Subscription, (relation) => relation.account, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Account.prototype, "subscriptions", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Account.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Account.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Account.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Account.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Account.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Account.prototype, "deletedBy", void 0);
exports.Account = Account = __decorate([
    (0, typeorm_1.Entity)('accounts')
], Account);


/***/ }),

/***/ "./src/modules/account/handlers/account-created.handler.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/account/handlers/account-created.handler.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountCreatedHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const account_created_command_1 = __webpack_require__(/*! ../commands/account-created.command */ "./src/modules/account/commands/account-created.command.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
let AccountCreatedHandler = class AccountCreatedHandler {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.debug('Account created handler called', {
            correlationId: 'd1ebbe65-7f91-45f5-9085-0d4245428c5f',
            command: JSON.stringify(command),
        });
        await new Promise((res) => res(true));
        return {
            actionId: crypto.randomUUID(),
        };
    }
};
exports.AccountCreatedHandler = AccountCreatedHandler;
exports.AccountCreatedHandler = AccountCreatedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(account_created_command_1.AccountCreatedCommand),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object])
], AccountCreatedHandler);


/***/ }),

/***/ "./src/modules/account/handlers/account-removed.handler.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/account/handlers/account-removed.handler.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountRemovedHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const account_removed_command_1 = __webpack_require__(/*! ../commands/account-removed.command */ "./src/modules/account/commands/account-removed.command.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
let AccountRemovedHandler = class AccountRemovedHandler {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.debug('Account removed handler called', {
            correlationId: 'd1ebbe65-7f91-45f5-9085-0d4245428c5f',
            command: JSON.stringify(command),
        });
        await new Promise((res) => res(true));
        return {
            actionId: crypto.randomUUID(),
        };
    }
};
exports.AccountRemovedHandler = AccountRemovedHandler;
exports.AccountRemovedHandler = AccountRemovedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(account_removed_command_1.AccountRemovedCommand),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object])
], AccountRemovedHandler);


/***/ }),

/***/ "./src/modules/account/handlers/account-updated.handler.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/account/handlers/account-updated.handler.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountUpdatedHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const account_updated_command_1 = __webpack_require__(/*! ../commands/account-updated.command */ "./src/modules/account/commands/account-updated.command.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
let AccountUpdatedHandler = class AccountUpdatedHandler {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.debug('Account updated handler called', {
            correlationId: 'd1ebbe65-7f91-45f5-9085-0d4245428c5f',
            command: JSON.stringify(command),
        });
        await new Promise((res) => res(true));
        return {
            actionId: crypto.randomUUID(),
        };
    }
};
exports.AccountUpdatedHandler = AccountUpdatedHandler;
exports.AccountUpdatedHandler = AccountUpdatedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(account_updated_command_1.AccountUpdatedCommand),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object])
], AccountUpdatedHandler);


/***/ }),

/***/ "./src/modules/activity/activity.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/activity/activity.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActivityModule = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const api_auth_guard_1 = __webpack_require__(/*! src/guards/api-auth.guard */ "./src/guards/api-auth.guard.ts");
const activity_service_1 = __webpack_require__(/*! ./activity.service */ "./src/modules/activity/activity.service.ts");
const activity_mapper_1 = __webpack_require__(/*! ./dto/activity.mapper */ "./src/modules/activity/dto/activity.mapper.ts");
const incomming_activity_mapper_1 = __webpack_require__(/*! ./dto/incomming-activity.mapper */ "./src/modules/activity/dto/incomming-activity.mapper.ts");
const activity_model_1 = __webpack_require__(/*! ./entities/activity.model */ "./src/modules/activity/entities/activity.model.ts");
const incomming_activity_model_1 = __webpack_require__(/*! ./entities/incomming-activity.model */ "./src/modules/activity/entities/incomming-activity.model.ts");
const activity_created_handler_1 = __webpack_require__(/*! ./handlers/activity-created.handler */ "./src/modules/activity/handlers/activity-created.handler.ts");
const incomming_activity_created_handler_1 = __webpack_require__(/*! ./handlers/incomming-activity-created.handler */ "./src/modules/activity/handlers/incomming-activity-created.handler.ts");
const incomming_activity_controller_1 = __webpack_require__(/*! ./incomming-activity.controller */ "./src/modules/activity/incomming-activity.controller.ts");
const incomming_activity_service_1 = __webpack_require__(/*! ./incomming-activity.service */ "./src/modules/activity/incomming-activity.service.ts");
let ActivityModule = class ActivityModule {
};
exports.ActivityModule = ActivityModule;
exports.ActivityModule = ActivityModule = __decorate([
    (0, common_1.Module)({
        imports: [
            logging_1.LoggingModule,
            typeorm_1.TypeOrmModule.forFeature([activity_model_1.Activity, incomming_activity_model_1.IncommingActivity]),
        ],
        controllers: [incomming_activity_controller_1.IncommingActivityController],
        providers: [
            api_auth_guard_1.ApiKeyGuard,
            activity_mapper_1.ActivityMapper,
            incomming_activity_mapper_1.IncommingActivityMapper,
            activity_service_1.ActivityService,
            incomming_activity_service_1.IncommingActivityService,
            activity_created_handler_1.ActivityCreatedHandler,
            incomming_activity_created_handler_1.IncommingActivityCreatedHandler,
        ],
        exports: [activity_service_1.ActivityService],
    })
], ActivityModule);


/***/ }),

/***/ "./src/modules/activity/activity.service.ts":
/*!**************************************************!*\
  !*** ./src/modules/activity/activity.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActivityService = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const activity_mapper_1 = __webpack_require__(/*! ./dto/activity.mapper */ "./src/modules/activity/dto/activity.mapper.ts");
const activity_model_1 = __webpack_require__(/*! ./entities/activity.model */ "./src/modules/activity/entities/activity.model.ts");
let ActivityService = class ActivityService {
    logger;
    repo;
    mapper;
    constructor(logger, repo, mapper) {
        this.logger = logger;
        this.repo = repo;
        this.mapper = mapper;
    }
    async create(createActivityDto) {
        const startTime = new Date(createActivityDto.startTime);
        const endTime = new Date(createActivityDto.endTime);
        const testDuration = endTime.getTime() - startTime.getTime();
        this.logger.debug('Creating with inputs', {
            correlationId: '8348256d-76f8-497d-8cde-8b254a5bd436',
            activityId: createActivityDto.activityId,
            rawStartTime: createActivityDto.startTime,
            startTime,
            rawEndTime: createActivityDto.endTime,
            endTime,
            testDuration,
        });
        const duration = new Date(createActivityDto.endTime).getTime() -
            new Date(createActivityDto.startTime).getTime();
        const entity = this.repo.create({
            ...createActivityDto,
            duration,
            createdBy: uuid_1.NIL,
        });
        const result = await this.repo.save(entity);
        return this.mapper.toDomain(result);
    }
    findAll() {
        return `This action returns all activity`;
    }
    findOne(id) {
        return `This action returns a #${id} activity`;
    }
    update(id, updateActivityDto) {
        this.logger.debug(`${this.constructor.name}.${this.update.name} called`, {
            correlationId: '3430a322-ceab-4d97-8144-d2e66019cbbd',
            id,
            dto: JSON.stringify(updateActivityDto),
        });
        return `This action updates a #${id} activity`;
    }
    remove(id) {
        return `This action removes a #${id} activity`;
    }
};
exports.ActivityService = ActivityService;
exports.ActivityService = ActivityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, typeorm_1.InjectRepository)(activity_model_1.Activity)),
    __param(2, (0, common_1.Inject)(activity_mapper_1.ActivityMapper)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof activity_mapper_1.ActivityMapper !== "undefined" && activity_mapper_1.ActivityMapper) === "function" ? _c : Object])
], ActivityService);


/***/ }),

/***/ "./src/modules/activity/commands/activity-created.command.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/activity/commands/activity-created.command.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActivityCreatedCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
class ActivityCreatedCommand extends cqrs_1.Command {
    entity;
    constructor(entity) {
        super();
        this.entity = entity;
    }
}
exports.ActivityCreatedCommand = ActivityCreatedCommand;


/***/ }),

/***/ "./src/modules/activity/commands/incomming-activity-created.command.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/activity/commands/incomming-activity-created.command.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IncommingActivityCreatedCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
class IncommingActivityCreatedCommand extends cqrs_1.Command {
    entity;
    constructor(entity) {
        super();
        this.entity = entity;
    }
}
exports.IncommingActivityCreatedCommand = IncommingActivityCreatedCommand;


/***/ }),

/***/ "./src/modules/activity/dto/activity.dto.ts":
/*!**************************************************!*\
  !*** ./src/modules/activity/dto/activity.dto.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActivityDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ActivityDto {
    constructor(partial) {
        Object.assign(this, partial);
    }
    accountId;
    source;
    name;
    deviceFingerprint;
    title;
    expression;
    startTime;
    endTime;
    createdBy;
    updatedBy;
    deletedBy;
    createdAt;
    updatedAt;
    deletedAt;
}
exports.ActivityDto = ActivityDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The id of the account' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ActivityDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The source system of the activity' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActivityDto.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the activity' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActivityDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The fingerprint of the device' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActivityDto.prototype, "deviceFingerprint", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The title of the activity' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActivityDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The expression of the activity' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActivityDto.prototype, "expression", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The start_time of the activity' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], ActivityDto.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The end_time of the activity' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], ActivityDto.prototype, "endTime", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ActivityDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ActivityDto.prototype, "updatedBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ActivityDto.prototype, "deletedBy", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], ActivityDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], ActivityDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], ActivityDto.prototype, "deletedAt", void 0);


/***/ }),

/***/ "./src/modules/activity/dto/activity.mapper.ts":
/*!*****************************************************!*\
  !*** ./src/modules/activity/dto/activity.mapper.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActivityMapper = void 0;
const activity_entity_1 = __webpack_require__(/*! ../entities/activity.entity */ "./src/modules/activity/entities/activity.entity.ts");
const activity_dto_1 = __webpack_require__(/*! ./activity.dto */ "./src/modules/activity/dto/activity.dto.ts");
class ActivityMapper {
    static toInterface(activity) {
        return new activity_dto_1.ActivityDto(activity.props);
    }
    toInterface(activity) {
        return ActivityMapper.toInterface(activity);
    }
    static toDomain(activity) {
        return new activity_entity_1.Activity({
            ...activity,
        });
    }
    toDomain(activity) {
        return ActivityMapper.toDomain(activity);
    }
    static toPersistence(activity) {
        return {
            ...activity.props,
        };
    }
    toPersistence(activity) {
        return ActivityMapper.toPersistence(activity);
    }
}
exports.ActivityMapper = ActivityMapper;


/***/ }),

/***/ "./src/modules/activity/dto/create-incomming-activity.dto.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/activity/dto/create-incomming-activity.dto.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateIncommingActivityDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateIncommingActivityDto {
    activityId;
    accountId;
    source;
    name;
    deviceFingerprint;
    title;
    expression;
    startTime;
    endTime;
    createdBy;
    updatedBy;
}
exports.CreateIncommingActivityDto = CreateIncommingActivityDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The id of the activity' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateIncommingActivityDto.prototype, "activityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The id of the account' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateIncommingActivityDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The source system of the activity' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateIncommingActivityDto.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the activity' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateIncommingActivityDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The fingerprint of the device' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateIncommingActivityDto.prototype, "deviceFingerprint", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The title of the activity' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateIncommingActivityDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The expression of the activity' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateIncommingActivityDto.prototype, "expression", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The start_time of the activity' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateIncommingActivityDto.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The end_time of the activity' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateIncommingActivityDto.prototype, "endTime", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIncommingActivityDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIncommingActivityDto.prototype, "updatedBy", void 0);


/***/ }),

/***/ "./src/modules/activity/dto/incomming-activity.dto.ts":
/*!************************************************************!*\
  !*** ./src/modules/activity/dto/incomming-activity.dto.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IncommingActivityDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class IncommingActivityDto {
    constructor(partial) {
        Object.assign(this, partial);
    }
    accountId;
    source;
    name;
    deviceFingerprint;
    title;
    expression;
    startTime;
    endTime;
    createdBy;
    updatedBy;
    deletedBy;
    createdAt;
    updatedAt;
    deletedAt;
}
exports.IncommingActivityDto = IncommingActivityDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The id of the account' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], IncommingActivityDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The source system of the activity' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IncommingActivityDto.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the activity' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IncommingActivityDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The fingerprint of the device' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IncommingActivityDto.prototype, "deviceFingerprint", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The title of the activity' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IncommingActivityDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The expression of the activity' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IncommingActivityDto.prototype, "expression", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The start_time of the activity' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], IncommingActivityDto.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The end_time of the activity' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], IncommingActivityDto.prototype, "endTime", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], IncommingActivityDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], IncommingActivityDto.prototype, "updatedBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], IncommingActivityDto.prototype, "deletedBy", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], IncommingActivityDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], IncommingActivityDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], IncommingActivityDto.prototype, "deletedAt", void 0);


/***/ }),

/***/ "./src/modules/activity/dto/incomming-activity.mapper.ts":
/*!***************************************************************!*\
  !*** ./src/modules/activity/dto/incomming-activity.mapper.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IncommingActivityMapper = void 0;
const incomming_activity_entity_1 = __webpack_require__(/*! ../entities/incomming-activity.entity */ "./src/modules/activity/entities/incomming-activity.entity.ts");
const incomming_activity_dto_1 = __webpack_require__(/*! ./incomming-activity.dto */ "./src/modules/activity/dto/incomming-activity.dto.ts");
class IncommingActivityMapper {
    static toInterface(activity) {
        return new incomming_activity_dto_1.IncommingActivityDto(activity.props);
    }
    toInterface(activity) {
        return IncommingActivityMapper.toInterface(activity);
    }
    static toDomain(activity) {
        return new incomming_activity_entity_1.IncommingActivity({
            ...activity,
        });
    }
    toDomain(activity) {
        return IncommingActivityMapper.toDomain(activity);
    }
    static toPersistence(activity) {
        return {
            ...activity.props,
        };
    }
    toPersistence(activity) {
        return IncommingActivityMapper.toPersistence(activity);
    }
}
exports.IncommingActivityMapper = IncommingActivityMapper;


/***/ }),

/***/ "./src/modules/activity/entities/activity.entity.ts":
/*!**********************************************************!*\
  !*** ./src/modules/activity/entities/activity.entity.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Activity = void 0;
class Activity {
    props;
    constructor(props) {
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
            updatedAt: props.updatedAt ?? new Date(),
        };
    }
    get id() {
        return this.props.id;
    }
    get accountId() {
        return this.props.accountId;
    }
    get name() {
        return this.props.name;
    }
    get source() {
        return this.props.source;
    }
    get deviceFingerprint() {
        return this.props.deviceFingerprint;
    }
    get title() {
        return this.props.title;
    }
    get expression() {
        return this.props.expression;
    }
    get startTime() {
        return this.props.startTime;
    }
    get endTime() {
        return this.props.endTime;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    get deletedAt() {
        return this.props.deletedAt;
    }
    get createdBy() {
        return this.props.createdBy;
    }
    get updatedBy() {
        return this.props.updatedBy;
    }
    get deletedBy() {
        return this.props.deletedBy;
    }
    softDelete(byActivityId) {
        this.props.deletedAt = new Date();
        if (byActivityId) {
            this.props.deletedBy = byActivityId;
        }
        this.touch();
    }
    updateOwner(id) {
        this.props.createdBy = id;
        this.touch();
    }
    updateUpdatedBy(id) {
        this.props.updatedBy = id;
        this.touch();
    }
    restore() {
        this.props.deletedAt = undefined;
        this.props.deletedBy = undefined;
        this.touch();
    }
    touch(id) {
        this.props.updatedAt = new Date();
        if (id) {
            this.props.updatedBy = id;
        }
    }
}
exports.Activity = Activity;


/***/ }),

/***/ "./src/modules/activity/entities/activity.model.ts":
/*!*********************************************************!*\
  !*** ./src/modules/activity/entities/activity.model.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Activity = void 0;
const account_model_1 = __webpack_require__(/*! src/modules/account/entities/account.model */ "./src/modules/account/entities/account.model.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Activity = class Activity {
    id;
    accountId;
    account;
    name;
    title;
    expression;
    deviceFingerprint;
    source;
    startTime;
    endTime;
    duration;
    createdAt;
    updatedAt;
    deletedAt;
    createdBy;
    updatedBy;
    deletedBy;
};
exports.Activity = Activity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Activity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Activity.prototype, "accountId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => account_model_1.Account, (account) => account.users, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'accountId' }),
    __metadata("design:type", typeof (_a = typeof account_model_1.Account !== "undefined" && account_model_1.Account) === "function" ? _a : Object)
], Activity.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Activity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Activity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Activity.prototype, "expression", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Activity.prototype, "deviceFingerprint", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Activity.prototype, "source", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Activity.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Activity.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Activity.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Activity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Activity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], Activity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Activity.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Activity.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Activity.prototype, "deletedBy", void 0);
exports.Activity = Activity = __decorate([
    (0, typeorm_1.Entity)('activities')
], Activity);


/***/ }),

/***/ "./src/modules/activity/entities/incomming-activity.entity.ts":
/*!********************************************************************!*\
  !*** ./src/modules/activity/entities/incomming-activity.entity.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IncommingActivity = void 0;
class IncommingActivity {
    props;
    constructor(props) {
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
            updatedAt: props.updatedAt ?? new Date(),
        };
    }
    get id() {
        return this.props.id;
    }
    get accountId() {
        return this.props.accountId;
    }
    get name() {
        return this.props.name;
    }
    get source() {
        return this.props.source;
    }
    get deviceFingerprint() {
        return this.props.deviceFingerprint;
    }
    get title() {
        return this.props.title;
    }
    get expression() {
        return this.props.expression;
    }
    get startTime() {
        return this.props.startTime;
    }
    get endTime() {
        return this.props.endTime;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    get deletedAt() {
        return this.props.deletedAt;
    }
    get createdBy() {
        return this.props.createdBy;
    }
    get updatedBy() {
        return this.props.updatedBy;
    }
    get deletedBy() {
        return this.props.deletedBy;
    }
    softDelete(byIncommingActivityId) {
        this.props.deletedAt = new Date();
        if (byIncommingActivityId) {
            this.props.deletedBy = byIncommingActivityId;
        }
        this.touch();
    }
    updateOwner(id) {
        this.props.createdBy = id;
        this.touch();
    }
    updateUpdatedBy(id) {
        this.props.updatedBy = id;
        this.touch();
    }
    restore() {
        this.props.deletedAt = undefined;
        this.props.deletedBy = undefined;
        this.touch();
    }
    touch(id) {
        this.props.updatedAt = new Date();
        if (id) {
            this.props.updatedBy = id;
        }
    }
}
exports.IncommingActivity = IncommingActivity;


/***/ }),

/***/ "./src/modules/activity/entities/incomming-activity.model.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/activity/entities/incomming-activity.model.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IncommingActivity = void 0;
const account_model_1 = __webpack_require__(/*! src/modules/account/entities/account.model */ "./src/modules/account/entities/account.model.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let IncommingActivity = class IncommingActivity {
    id;
    accountId;
    account;
    name;
    title;
    expression;
    deviceFingerprint;
    source;
    startTime;
    endTime;
    duration;
    createdAt;
    updatedAt;
    deletedAt;
    createdBy;
    updatedBy;
    deletedBy;
};
exports.IncommingActivity = IncommingActivity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], IncommingActivity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], IncommingActivity.prototype, "accountId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => account_model_1.Account, (account) => account.users, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'accountId' }),
    __metadata("design:type", typeof (_a = typeof account_model_1.Account !== "undefined" && account_model_1.Account) === "function" ? _a : Object)
], IncommingActivity.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IncommingActivity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IncommingActivity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IncommingActivity.prototype, "expression", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IncommingActivity.prototype, "deviceFingerprint", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IncommingActivity.prototype, "source", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], IncommingActivity.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], IncommingActivity.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], IncommingActivity.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], IncommingActivity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], IncommingActivity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], IncommingActivity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], IncommingActivity.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], IncommingActivity.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], IncommingActivity.prototype, "deletedBy", void 0);
exports.IncommingActivity = IncommingActivity = __decorate([
    (0, typeorm_1.Entity)('incomming_activities')
], IncommingActivity);


/***/ }),

/***/ "./src/modules/activity/handlers/activity-created.handler.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/activity/handlers/activity-created.handler.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActivityCreatedHandler = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const activity_created_command_1 = __webpack_require__(/*! ../commands/activity-created.command */ "./src/modules/activity/commands/activity-created.command.ts");
let ActivityCreatedHandler = class ActivityCreatedHandler {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.debug('Activity created handler called', {
            correlationId: '51287cb5-e91d-481f-bff6-5f4e89770440',
            command: JSON.stringify(command),
        });
        await new Promise((res) => res(true));
        return {
            actionId: crypto.randomUUID(),
        };
    }
};
exports.ActivityCreatedHandler = ActivityCreatedHandler;
exports.ActivityCreatedHandler = ActivityCreatedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(activity_created_command_1.ActivityCreatedCommand),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object])
], ActivityCreatedHandler);


/***/ }),

/***/ "./src/modules/activity/handlers/incomming-activity-created.handler.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/activity/handlers/incomming-activity-created.handler.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IncommingActivityCreatedHandler = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const incomming_activity_created_command_1 = __webpack_require__(/*! ../commands/incomming-activity-created.command */ "./src/modules/activity/commands/incomming-activity-created.command.ts");
let IncommingActivityCreatedHandler = class IncommingActivityCreatedHandler {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.debug('IncommingActivity created handler called', {
            correlationId: '51287cb5-e91d-481f-bff6-5f4e89770440',
            command: JSON.stringify(command),
        });
        await new Promise((res) => res(true));
        return {
            actionId: crypto.randomUUID(),
        };
    }
};
exports.IncommingActivityCreatedHandler = IncommingActivityCreatedHandler;
exports.IncommingActivityCreatedHandler = IncommingActivityCreatedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(incomming_activity_created_command_1.IncommingActivityCreatedCommand),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object])
], IncommingActivityCreatedHandler);


/***/ }),

/***/ "./src/modules/activity/incomming-activity.controller.ts":
/*!***************************************************************!*\
  !*** ./src/modules/activity/incomming-activity.controller.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IncommingActivityController = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const api_auth_guard_1 = __webpack_require__(/*! src/guards/api-auth.guard */ "./src/guards/api-auth.guard.ts");
const logging_cache_interceptor_1 = __webpack_require__(/*! src/interceptors/logging-cache.interceptor */ "./src/interceptors/logging-cache.interceptor.ts");
const incomming_activity_created_command_1 = __webpack_require__(/*! ./commands/incomming-activity-created.command */ "./src/modules/activity/commands/incomming-activity-created.command.ts");
const create_incomming_activity_dto_1 = __webpack_require__(/*! ./dto/create-incomming-activity.dto */ "./src/modules/activity/dto/create-incomming-activity.dto.ts");
const incomming_activity_mapper_1 = __webpack_require__(/*! ./dto/incomming-activity.mapper */ "./src/modules/activity/dto/incomming-activity.mapper.ts");
const incomming_activity_service_1 = __webpack_require__(/*! ./incomming-activity.service */ "./src/modules/activity/incomming-activity.service.ts");
let IncommingActivityController = class IncommingActivityController {
    logger;
    service;
    mapper;
    commandBus;
    constructor(logger, service, mapper, commandBus) {
        this.logger = logger;
        this.service = service;
        this.mapper = mapper;
        this.commandBus = commandBus;
    }
    async create(dto) {
        this.logger.debug(`${this.constructor.name}.${this.create.name} called`, {
            dto: JSON.stringify(dto),
        });
        const result = await this.service.create(dto);
        void this.commandBus.execute(new incomming_activity_created_command_1.IncommingActivityCreatedCommand(result));
        return this.mapper.toInterface(result);
    }
    remove(id) {
        return this.service.remove(+id);
    }
};
exports.IncommingActivityController = IncommingActivityController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiKeyGuard),
    (0, swagger_1.ApiHeader)({
        name: 'x-api-key',
        description: 'Client API key',
        required: true,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'x-signature',
        description: 'Request signature',
        required: true,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'x-timestamp',
        description: 'Request timestamp (milliseconds since epoch)',
        required: true,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof create_incomming_activity_dto_1.CreateIncommingActivityDto !== "undefined" && create_incomming_activity_dto_1.CreateIncommingActivityDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], IncommingActivityController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IncommingActivityController.prototype, "remove", null);
exports.IncommingActivityController = IncommingActivityController = __decorate([
    (0, common_1.Controller)({ path: 'activities', version: '1' }),
    (0, common_1.UseInterceptors)(logging_cache_interceptor_1.ControllerCacheInterceptor, common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, common_1.Inject)(incomming_activity_service_1.IncommingActivityService)),
    __param(2, (0, common_1.Inject)(incomming_activity_mapper_1.IncommingActivityMapper)),
    __param(3, (0, common_1.Inject)(cqrs_1.CommandBus)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof incomming_activity_service_1.IncommingActivityService !== "undefined" && incomming_activity_service_1.IncommingActivityService) === "function" ? _b : Object, typeof (_c = typeof incomming_activity_mapper_1.IncommingActivityMapper !== "undefined" && incomming_activity_mapper_1.IncommingActivityMapper) === "function" ? _c : Object, typeof (_d = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _d : Object])
], IncommingActivityController);


/***/ }),

/***/ "./src/modules/activity/incomming-activity.service.ts":
/*!************************************************************!*\
  !*** ./src/modules/activity/incomming-activity.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IncommingActivityService = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const incomming_activity_model_1 = __webpack_require__(/*! ./entities/incomming-activity.model */ "./src/modules/activity/entities/incomming-activity.model.ts");
const incomming_activity_mapper_1 = __webpack_require__(/*! ./dto/incomming-activity.mapper */ "./src/modules/activity/dto/incomming-activity.mapper.ts");
let IncommingActivityService = class IncommingActivityService {
    logger;
    repo;
    mapper;
    constructor(logger, repo, mapper) {
        this.logger = logger;
        this.repo = repo;
        this.mapper = mapper;
    }
    async create(createIncommingActivityDto) {
        const startTime = new Date(createIncommingActivityDto.startTime);
        const endTime = new Date(createIncommingActivityDto.endTime);
        const testDuration = endTime.getTime() - startTime.getTime();
        this.logger.debug('Creating with inputs', {
            correlationId: '8348256d-76f8-497d-8cde-8b254a5bd436',
            activityId: createIncommingActivityDto.activityId,
            rawStartTime: createIncommingActivityDto.startTime,
            startTime,
            rawEndTime: createIncommingActivityDto.endTime,
            endTime,
            testDuration,
        });
        const duration = new Date(createIncommingActivityDto.endTime).getTime() -
            new Date(createIncommingActivityDto.startTime).getTime();
        const entity = this.repo.create({
            ...createIncommingActivityDto,
            duration,
            createdBy: uuid_1.NIL,
        });
        const result = await this.repo.save(entity);
        return this.mapper.toDomain(result);
    }
    remove(id) {
        return `This action removes a #${id} activity`;
    }
};
exports.IncommingActivityService = IncommingActivityService;
exports.IncommingActivityService = IncommingActivityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, typeorm_1.InjectRepository)(incomming_activity_model_1.IncommingActivity)),
    __param(2, (0, common_1.Inject)(incomming_activity_mapper_1.IncommingActivityMapper)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof incomming_activity_mapper_1.IncommingActivityMapper !== "undefined" && incomming_activity_mapper_1.IncommingActivityMapper) === "function" ? _c : Object])
], IncommingActivityService);


/***/ }),

/***/ "./src/modules/ai/ai.module.ts":
/*!*************************************!*\
  !*** ./src/modules/ai/ai.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AiModule = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const ai_service_1 = __webpack_require__(/*! ./ai.service */ "./src/modules/ai/ai.service.ts");
let AiModule = class AiModule {
};
exports.AiModule = AiModule;
exports.AiModule = AiModule = __decorate([
    (0, common_1.Module)({
        imports: [logging_1.LoggingModule],
        providers: [ai_service_1.AiService],
        exports: [ai_service_1.AiService],
    })
], AiModule);


/***/ }),

/***/ "./src/modules/ai/ai.service.ts":
/*!**************************************!*\
  !*** ./src/modules/ai/ai.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AiService = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const cache_manager_1 = __webpack_require__(/*! @nestjs/cache-manager */ "@nestjs/cache-manager");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const openai_1 = __importDefault(__webpack_require__(/*! openai */ "openai"));
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
let AiService = class AiService {
    configService;
    logger;
    _instance;
    constructor(configService, logger) {
        this.configService = configService;
        this.logger = logger;
        const apiKey = this.configService.get('OPENAI_API_KEY');
        this._instance = new openai_1.default({ apiKey });
    }
    async processGenericPrompt(req) {
        try {
            const sanitizedModel = req.modelId.split(':')[0];
            const completion = await this._completion({
                model: sanitizedModel,
                prompt: req.content,
                context: '',
                completionPrompt(prompt, context) {
                    return prompt + context;
                },
            });
            return {
                modelId: req.modelId,
                conversationId: req.conversationId,
                debug: req.debug,
                content: completion,
                contentType: 'text',
                id: (0, uuid_1.v4)(),
                timestamp: Date.now(),
            };
        }
        catch (error) {
            this.logger.error(`${this.constructor.name}.${this._completion.name} encountered an error`, {
                correlationId: 'ccaf8ee4-042f-41b3-9333-ee91faf2e94c',
                error: JSON.stringify(error),
            });
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async _completion(deps) {
        try {
            const completion = await this._instance.chat.completions.create({
                model: deps.model,
                messages: [
                    {
                        role: 'system',
                        content: deps.completionPrompt(deps.prompt, deps.context),
                    },
                ],
            });
            return completion.choices[0].message.content;
        }
        catch (error) {
            this.logger.error(`${this.constructor.name}.${this._completion.name} encountered an error`, {
                correlationId: 'a08ff1ff-c86a-47b5-bbf8-0be77c76e4de',
                error: JSON.stringify(error),
            });
            throw new common_1.InternalServerErrorException(error);
        }
    }
};
exports.AiService = AiService;
exports.AiService = AiService = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.UseInterceptors)(cache_manager_1.CacheInterceptor),
    __param(0, (0, common_1.Inject)(config_1.ConfigService)),
    __param(1, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _b : Object])
], AiService);


/***/ }),

/***/ "./src/modules/app.module.ts":
/*!***********************************!*\
  !*** ./src/modules/app.module.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const cache_manager_1 = __webpack_require__(/*! @nestjs/cache-manager */ "@nestjs/cache-manager");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const account_module_1 = __webpack_require__(/*! ./account/account.module */ "./src/modules/account/account.module.ts");
const account_model_1 = __webpack_require__(/*! ./account/entities/account.model */ "./src/modules/account/entities/account.model.ts");
const health_module_1 = __webpack_require__(/*! ./health/health.module */ "./src/modules/health/health.module.ts");
const redis_1 = __importDefault(__webpack_require__(/*! @keyv/redis */ "@keyv/redis"));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const cacheable_1 = __webpack_require__(/*! cacheable */ "cacheable");
const keyv_1 = __webpack_require__(/*! keyv */ "keyv");
const logging_thottler_guard_1 = __webpack_require__(/*! src/guards/logging-thottler.guard */ "./src/guards/logging-thottler.guard.ts");
const user_module_1 = __webpack_require__(/*! ./user/user.module */ "./src/modules/user/user.module.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./src/modules/auth/auth.module.ts");
const user_model_1 = __webpack_require__(/*! ./user/entities/user.model */ "./src/modules/user/entities/user.model.ts");
const casl_module_1 = __webpack_require__(/*! ./casl/casl.module */ "./src/modules/casl/casl.module.ts");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/modules/app/app.module.ts");
const workspace_module_1 = __webpack_require__(/*! ./workspace/workspace.module */ "./src/modules/workspace/workspace.module.ts");
const workspace_model_1 = __webpack_require__(/*! ./workspace/entities/workspace.model */ "./src/modules/workspace/entities/workspace.model.ts");
const app_model_1 = __webpack_require__(/*! ./app/entities/app.model */ "./src/modules/app/entities/app.model.ts");
const workspace_user_model_1 = __webpack_require__(/*! ./workspace/entities/workspace-user.model */ "./src/modules/workspace/entities/workspace-user.model.ts");
const integration_module_1 = __webpack_require__(/*! ./integration/integration.module */ "./src/modules/integration/integration.module.ts");
const ai_module_1 = __webpack_require__(/*! ./ai/ai.module */ "./src/modules/ai/ai.module.ts");
const integration_model_1 = __webpack_require__(/*! ./integration/entities/integration.model */ "./src/modules/integration/entities/integration.model.ts");
const department_model_1 = __webpack_require__(/*! ./department/entities/department.model */ "./src/modules/department/entities/department.model.ts");
const subscription_module_1 = __webpack_require__(/*! ./subscription/subscription.module */ "./src/modules/subscription/subscription.module.ts");
const activity_module_1 = __webpack_require__(/*! ./activity/activity.module */ "./src/modules/activity/activity.module.ts");
const activity_model_1 = __webpack_require__(/*! ./activity/entities/activity.model */ "./src/modules/activity/entities/activity.model.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                expandVariables: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    type: 'postgres',
                    host: config.get('DB_HOST', 'db'),
                    port: Number(config.get('DB_PORT', '5432')),
                    username: config.get('DB_USER', 'postgres'),
                    password: config.get('DB_PASS', 'postgres'),
                    database: config.get('DB_NAME', 'p1'),
                    entities: [
                        account_model_1.Account,
                        user_model_1.User,
                        app_model_1.App,
                        integration_model_1.Integration,
                        department_model_1.Department,
                        workspace_model_1.Workspace,
                        workspace_user_model_1.WorkspaceUser,
                        activity_model_1.Activity,
                    ],
                    synchronize: true,
                    autoLoadEntities: true,
                    retryAttempts: 10,
                    retryDelay: 5000,
                }),
            }),
            cache_manager_1.CacheModule.registerAsync({
                isGlobal: true,
                inject: [config_1.ConfigService],
                useFactory: async (configService) => {
                    const redisUrl = configService.get('REDIS_URL', 'redis://localhost:6379');
                    return {
                        stores: [
                            new keyv_1.Keyv({ store: new redis_1.default(redisUrl), ttl: 60_000 }),
                            new keyv_1.Keyv({
                                store: new cacheable_1.CacheableMemory({ ttl: 60000, lruSize: 5000 }),
                            }),
                        ],
                    };
                },
            }),
            schedule_1.ScheduleModule.forRoot(),
            event_emitter_1.EventEmitterModule.forRoot(),
            cqrs_1.CqrsModule.forRoot(),
            throttler_1.ThrottlerModule.forRoot({
                throttlers: [
                    {
                        limit: 10,
                        ttl: 6000,
                    },
                ],
            }),
            axios_1.HttpModule,
            health_module_1.HealthModule,
            account_module_1.AccountModule,
            logging_1.LoggingModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            casl_module_1.CaslModule,
            app_module_1.AppModule,
            workspace_module_1.WorkspaceModule,
            integration_module_1.IntegrationModule,
            subscription_module_1.SubscriptionModule,
            ai_module_1.AiModule,
            activity_module_1.ActivityModule,
        ],
        providers: [{ provide: core_1.APP_GUARD, useClass: logging_thottler_guard_1.LoggingThrottlerGuard }],
    })
], AppModule);


/***/ }),

/***/ "./src/modules/app/app.controller.ts":
/*!*******************************************!*\
  !*** ./src/modules/app/app.controller.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const dtos_1 = __webpack_require__(/*! @app/dtos */ "./libs/dtos/src/index.ts");
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! src/guards/jwt-auth.guard */ "./src/guards/jwt-auth.guard.ts");
const policies_guard_1 = __webpack_require__(/*! src/guards/policies.guard */ "./src/guards/policies.guard.ts");
const logging_cache_interceptor_1 = __webpack_require__(/*! src/interceptors/logging-cache.interceptor */ "./src/interceptors/logging-cache.interceptor.ts");
const casl_ability_factory_1 = __webpack_require__(/*! ../casl/casl-ability.factory/casl-ability.factory */ "./src/modules/casl/casl-ability.factory/casl-ability.factory.ts");
const app_created_command_1 = __webpack_require__(/*! ./commands/app-created.command */ "./src/modules/app/commands/app-created.command.ts");
const create_app_dto_1 = __webpack_require__(/*! ./dto/create-app.dto */ "./src/modules/app/dto/create-app.dto.ts");
const update_app_dto_1 = __webpack_require__(/*! ./dto/update-app.dto */ "./src/modules/app/dto/update-app.dto.ts");
const app_mapper_1 = __webpack_require__(/*! ./dto/app.mapper */ "./src/modules/app/dto/app.mapper.ts");
const app_entity_1 = __webpack_require__(/*! ./entities/app.entity */ "./src/modules/app/entities/app.entity.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/modules/app/app.service.ts");
const app_removed_command_1 = __webpack_require__(/*! ./commands/app-removed.command */ "./src/modules/app/commands/app-removed.command.ts");
const app_updated_command_1 = __webpack_require__(/*! ./commands/app-updated.command */ "./src/modules/app/commands/app-updated.command.ts");
let AppController = class AppController {
    logger;
    service;
    mapper;
    caslAbilityFactory;
    commandBus;
    constructor(logger, service, mapper, caslAbilityFactory, commandBus) {
        this.logger = logger;
        this.service = service;
        this.mapper = mapper;
        this.caslAbilityFactory = caslAbilityFactory;
        this.commandBus = commandBus;
    }
    async create(createAppDto, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        if (!ability.can(casl_ability_factory_1.Action.Create, app_entity_1.App)) {
            throw new common_1.UnauthorizedException();
        }
        createAppDto.accountId = req.user.accountId;
        const result = await this.service.create(createAppDto, req.user.id);
        void this.commandBus.execute(new app_created_command_1.AppCreatedCommand(result));
        return this.mapper.toInterface(result);
    }
    async findAll(skip = 0, take = 100, req) {
        const result = await this.service.findAll(skip, take, {
            accountId: req.user.accountId,
        });
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        return {
            ...result,
            data: result.data
                .filter((entity) => ability.can(casl_ability_factory_1.Action.Read, entity))
                .map((entity) => this.mapper.toInterface(entity)),
        };
    }
    async findOne(id, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        const app = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Read, app)) {
            throw new common_1.UnauthorizedException();
        }
        return this.mapper.toInterface(app);
    }
    async update(id, updateAppDto, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        const app = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Update, app)) {
            throw new common_1.UnauthorizedException();
        }
        const updated = await this.service.update(id, updateAppDto, req.user.id);
        void this.commandBus.execute(new app_updated_command_1.AppUpdatedCommand(updated));
        return this.mapper.toInterface(updated);
    }
    async remove(id, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        const app = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Delete, app)) {
            throw new common_1.UnauthorizedException();
        }
        await this.service.remove(id, req.user.id);
        void this.commandBus.execute(new app_removed_command_1.AppRemovedCommand(app));
        return app.id;
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)(),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Create, app_entity_1.App)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof create_app_dto_1.CreateAppDto !== "undefined" && create_app_dto_1.CreateAppDto) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Read, app_entity_1.App)),
    (0, swagger_1.ApiQuery)({ name: 'skip', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'take', required: false, type: Number }),
    (0, swagger_1.ApiOkResponse)({ type: dtos_1.FindAllResponseDto }),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], AppController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Read, app_entity_1.App)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Update, app_entity_1.App)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_h = typeof update_app_dto_1.UpdateAppDto !== "undefined" && update_app_dto_1.UpdateAppDto) === "function" ? _h : Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Delete, app_entity_1.App)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "remove", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)({ path: 'apps', version: '1' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, policies_guard_1.PoliciesGuard),
    (0, common_1.UseInterceptors)(logging_cache_interceptor_1.ControllerCacheInterceptor, common_1.ClassSerializerInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, common_1.Inject)(app_service_1.AppService)),
    __param(2, (0, common_1.Inject)(app_mapper_1.AppMapper)),
    __param(3, (0, common_1.Inject)(casl_ability_factory_1.CaslAbilityFactory)),
    __param(4, (0, common_1.Inject)(cqrs_1.CommandBus)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _b : Object, typeof (_c = typeof app_mapper_1.AppMapper !== "undefined" && app_mapper_1.AppMapper) === "function" ? _c : Object, typeof (_d = typeof casl_ability_factory_1.CaslAbilityFactory !== "undefined" && casl_ability_factory_1.CaslAbilityFactory) === "function" ? _d : Object, typeof (_e = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _e : Object])
], AppController);


/***/ }),

/***/ "./src/modules/app/app.module.ts":
/*!***************************************!*\
  !*** ./src/modules/app/app.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/modules/app/app.service.ts");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./src/modules/app/app.controller.ts");
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const app_model_1 = __webpack_require__(/*! ./entities/app.model */ "./src/modules/app/entities/app.model.ts");
const casl_module_1 = __webpack_require__(/*! ../casl/casl.module */ "./src/modules/casl/casl.module.ts");
const app_mapper_1 = __webpack_require__(/*! ./dto/app.mapper */ "./src/modules/app/dto/app.mapper.ts");
const app_created_handler_1 = __webpack_require__(/*! ./handlers/app-created.handler */ "./src/modules/app/handlers/app-created.handler.ts");
const app_removed_handler_1 = __webpack_require__(/*! ./handlers/app-removed.handler */ "./src/modules/app/handlers/app-removed.handler.ts");
const app_updated_handler_1 = __webpack_require__(/*! ./handlers/app-updated.handler */ "./src/modules/app/handlers/app-updated.handler.ts");
const ai_module_1 = __webpack_require__(/*! ../ai/ai.module */ "./src/modules/ai/ai.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            logging_1.LoggingModule,
            typeorm_1.TypeOrmModule.forFeature([app_model_1.App]),
            casl_module_1.CaslModule,
            ai_module_1.AiModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_mapper_1.AppMapper,
            app_service_1.AppService,
            app_created_handler_1.AppCreatedHandler,
            app_updated_handler_1.AppUpdatedHandler,
            app_removed_handler_1.AppRemovedHandler,
        ],
        exports: [app_service_1.AppService],
    })
], AppModule);


/***/ }),

/***/ "./src/modules/app/app.service.ts":
/*!****************************************!*\
  !*** ./src/modules/app/app.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const app_mapper_1 = __webpack_require__(/*! ./dto/app.mapper */ "./src/modules/app/dto/app.mapper.ts");
const app_model_1 = __webpack_require__(/*! ./entities/app.model */ "./src/modules/app/entities/app.model.ts");
let AppService = class AppService {
    logger;
    repo;
    mapper;
    constructor(logger, repo, mapper) {
        this.logger = logger;
        this.repo = repo;
        this.mapper = mapper;
    }
    async createWithManager(createAppDto, manager) {
        const repo = manager.getRepository(app_model_1.App);
        const entity = repo.create({ ...createAppDto });
        const result = await repo.save(entity);
        return this.mapper.toDomain(result);
    }
    async create(createAppDto, createdBy) {
        const entity = this.repo.create({ ...createAppDto, createdBy });
        const result = await this.repo.save(entity);
        return this.mapper.toDomain(result);
    }
    async findAll(skip = 0, take = 100, where) {
        try {
            const [entities, count] = await this.repo.findAndCount({
                skip,
                take,
                where,
            });
            return {
                data: entities.map((entity) => this.mapper.toDomain(entity)),
                pagination: {
                    total: count,
                    skip,
                    take,
                    hasNextPage: skip + take < count,
                },
            };
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.findAll.name} encountered an error`, {
                correlationId: '6d437955-6b3a-417d-825b-3f43dedd8825',
                err: JSON.stringify(err),
            });
            return {
                data: [],
                pagination: { total: 0, skip: 0, take, hasNextPage: false },
            };
        }
    }
    async findOne(id) {
        try {
            const entity = await this.repo.findOneBy({ id });
            if (!entity) {
                throw new common_1.NotFoundException();
            }
            return this.mapper.toDomain(entity);
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.findOne.name} encountered an error`, {
                correlationId: '6acb4b57-7592-4f08-869c-b4a14cddd072',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async findOneByName(name) {
        try {
            const model = await this.repo.findOneBy({ name });
            if (!model) {
                throw new common_1.NotFoundException();
            }
            return this.mapper.toDomain(model);
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.findOneByName.name} encountered an error`, {
                correlationId: '7cce84d8-8f89-4058-8d2e-af450cfad2d3',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async updateWithManager(id, updateAppDto, manager) {
        try {
            const repo = manager.getRepository(app_model_1.App);
            const model = await repo.findOneBy({ id });
            if (!model) {
                throw new common_1.NotFoundException();
            }
            const entity = this.mapper.toDomain(model);
            if (updateAppDto.name) {
                entity.updateName(updateAppDto.name);
            }
            if (updateAppDto.createdBy) {
                entity.updateOwner(updateAppDto.createdBy);
            }
            if (updateAppDto.updatedBy) {
                entity.updateUpdatedBy(updateAppDto.updatedBy);
            }
            await repo.update(entity.id, this.mapper.toPersistence(entity));
            return entity;
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.updateWithManager.name} encountered an error`, {
                correlationId: '6befde88-ff55-4a59-9c7b-8b47a5980dd4',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async update(id, updateAppDto, updatedBy) {
        try {
            const entity = await this.findOne(id);
            if (updateAppDto.name) {
                entity.updateName(updateAppDto.name);
            }
            if (updateAppDto.description) {
                entity.updateDescription(updateAppDto.description);
            }
            if (updateAppDto.category) {
                entity.updateDescription(updateAppDto.category);
            }
            entity.updateUpdatedBy(updatedBy);
            await this.repo.update(entity.id, this.mapper.toPersistence(entity));
            return entity;
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.update.name} encountered an error`, {
                correlationId: '6befde88-ff55-4a59-9c7b-8b47a5980dd4',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async remove(id, removedBy) {
        try {
            const entity = await this.findOne(id);
            entity.softDelete(removedBy);
            await this.repo.update(entity.id, this.mapper.toPersistence(entity));
            return entity;
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.remove.name} encountered an error`, {
                correlationId: 'b76287ba-c244-475f-adcb-52c6917ba739',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, typeorm_1.InjectRepository)(app_model_1.App)),
    __param(2, (0, common_1.Inject)(app_mapper_1.AppMapper)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof app_mapper_1.AppMapper !== "undefined" && app_mapper_1.AppMapper) === "function" ? _c : Object])
], AppService);


/***/ }),

/***/ "./src/modules/app/commands/app-created.command.ts":
/*!*********************************************************!*\
  !*** ./src/modules/app/commands/app-created.command.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppCreatedCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
class AppCreatedCommand extends cqrs_1.Command {
    entity;
    constructor(entity) {
        super();
        this.entity = entity;
    }
}
exports.AppCreatedCommand = AppCreatedCommand;


/***/ }),

/***/ "./src/modules/app/commands/app-removed.command.ts":
/*!*********************************************************!*\
  !*** ./src/modules/app/commands/app-removed.command.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppRemovedCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
class AppRemovedCommand extends cqrs_1.Command {
    entity;
    constructor(entity) {
        super();
        this.entity = entity;
    }
}
exports.AppRemovedCommand = AppRemovedCommand;


/***/ }),

/***/ "./src/modules/app/commands/app-updated.command.ts":
/*!*********************************************************!*\
  !*** ./src/modules/app/commands/app-updated.command.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppUpdatedCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
class AppUpdatedCommand extends cqrs_1.Command {
    entity;
    constructor(entity) {
        super();
        this.entity = entity;
    }
}
exports.AppUpdatedCommand = AppUpdatedCommand;


/***/ }),

/***/ "./src/modules/app/dto/app.dto.ts":
/*!****************************************!*\
  !*** ./src/modules/app/dto/app.dto.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const app_entity_1 = __webpack_require__(/*! ../entities/app.entity */ "./src/modules/app/entities/app.entity.ts");
class AppDto {
    constructor(partial) {
        Object.assign(this, partial);
    }
    accountId;
    name;
    description;
    category;
    createdBy;
    updatedBy;
    deletedBy;
    createdAt;
    updatedAt;
    deletedAt;
}
exports.AppDto = AppDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The id of the account' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AppDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the app' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The description of the app' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The category of the app' }),
    (0, class_validator_1.IsEnum)(app_entity_1.Category),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof app_entity_1.Category !== "undefined" && app_entity_1.Category) === "function" ? _a : Object)
], AppDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AppDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AppDto.prototype, "updatedBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AppDto.prototype, "deletedBy", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], AppDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], AppDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], AppDto.prototype, "deletedAt", void 0);


/***/ }),

/***/ "./src/modules/app/dto/app.mapper.ts":
/*!*******************************************!*\
  !*** ./src/modules/app/dto/app.mapper.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppMapper = void 0;
const app_entity_1 = __webpack_require__(/*! ../entities/app.entity */ "./src/modules/app/entities/app.entity.ts");
const app_dto_1 = __webpack_require__(/*! ./app.dto */ "./src/modules/app/dto/app.dto.ts");
class AppMapper {
    static toInterface(user) {
        return new app_dto_1.AppDto(user.props);
    }
    toInterface(user) {
        return AppMapper.toInterface(user);
    }
    static toDomain(user) {
        return new app_entity_1.App({
            ...user,
        });
    }
    toDomain(user) {
        return AppMapper.toDomain(user);
    }
    static toPersistence(user) {
        return {
            ...user.props,
        };
    }
    toPersistence(user) {
        return AppMapper.toPersistence(user);
    }
}
exports.AppMapper = AppMapper;


/***/ }),

/***/ "./src/modules/app/dto/create-app.dto.ts":
/*!***********************************************!*\
  !*** ./src/modules/app/dto/create-app.dto.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAppDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const app_entity_1 = __webpack_require__(/*! ../entities/app.entity */ "./src/modules/app/entities/app.entity.ts");
class CreateAppDto {
    name;
    accountId;
    description;
    category;
    createdBy;
    updatedBy;
}
exports.CreateAppDto = CreateAppDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the app' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAppDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAppDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The description of the app' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAppDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The category of the app' }),
    (0, class_validator_1.IsEnum)(app_entity_1.Category),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof app_entity_1.Category !== "undefined" && app_entity_1.Category) === "function" ? _a : Object)
], CreateAppDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAppDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAppDto.prototype, "updatedBy", void 0);


/***/ }),

/***/ "./src/modules/app/dto/update-app.dto.ts":
/*!***********************************************!*\
  !*** ./src/modules/app/dto/update-app.dto.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAppDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_app_dto_1 = __webpack_require__(/*! ./create-app.dto */ "./src/modules/app/dto/create-app.dto.ts");
class UpdateAppDto extends (0, mapped_types_1.PartialType)(create_app_dto_1.CreateAppDto) {
}
exports.UpdateAppDto = UpdateAppDto;


/***/ }),

/***/ "./src/modules/app/entities/app.entity.ts":
/*!************************************************!*\
  !*** ./src/modules/app/entities/app.entity.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = exports.Category = exports.Type = void 0;
var Type;
(function (Type) {
})(Type || (exports.Type = Type = {}));
var Category;
(function (Category) {
    Category["None"] = "none";
    Category["Communication"] = "communication";
    Category["Collaboration"] = "collaboration";
    Category["Development"] = "development";
    Category["Design"] = "design";
    Category["Storage"] = "storage";
    Category["CRM"] = "crm";
    Category["Marketing"] = "marketing";
    Category["Support"] = "support";
    Category["HR"] = "hr";
    Category["Finance"] = "finance";
    Category["Scheduling"] = "scheduling";
    Category["Conferencing"] = "conferencing";
    Category["Infrastructure"] = "infrastructure";
    Category["Identity"] = "identity";
    Category["Analytics"] = "analytics";
    Category["Knowledge"] = "knowledge";
    Category["Tracking"] = "tracking";
    Category["Contracts"] = "contracts";
    Category["Security"] = "security";
    Category["Automation"] = "automation";
})(Category || (exports.Category = Category = {}));
class App {
    props;
    constructor(props) {
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
            updatedAt: props.updatedAt ?? new Date(),
        };
    }
    get id() {
        return this.props.id;
    }
    get accountId() {
        return this.props.accountId;
    }
    get name() {
        return this.props.name;
    }
    get description() {
        return this.props.description;
    }
    get category() {
        return this.props.category;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    get deletedAt() {
        return this.props.deletedAt;
    }
    get createdBy() {
        return this.props.createdBy;
    }
    get updatedBy() {
        return this.props.updatedBy;
    }
    get deletedBy() {
        return this.props.deletedBy;
    }
    updateName(newName) {
        this.props.name = newName;
        this.touch();
    }
    updateDescription(description) {
        this.props.description = description;
        this.touch();
    }
    updateCategory(category) {
        this.props.category = category;
        this.touch();
    }
    softDelete(byUserId) {
        this.props.deletedAt = new Date();
        if (byUserId) {
            this.props.deletedBy = byUserId;
        }
        this.touch();
    }
    updateOwner(id) {
        this.props.createdBy = id;
        this.touch();
    }
    updateUpdatedBy(id) {
        this.props.updatedBy = id;
        this.touch();
    }
    restore() {
        this.props.deletedAt = undefined;
        this.props.deletedBy = undefined;
        this.touch();
    }
    touch(id) {
        this.props.updatedAt = new Date();
        if (id) {
            this.props.updatedBy = id;
        }
    }
}
exports.App = App;


/***/ }),

/***/ "./src/modules/app/entities/app.model.ts":
/*!***********************************************!*\
  !*** ./src/modules/app/entities/app.model.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
const account_model_1 = __webpack_require__(/*! src/modules/account/entities/account.model */ "./src/modules/account/entities/account.model.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const app_entity_1 = __webpack_require__(/*! ./app.entity */ "./src/modules/app/entities/app.entity.ts");
const integration_model_1 = __webpack_require__(/*! src/modules/integration/entities/integration.model */ "./src/modules/integration/entities/integration.model.ts");
const subscription_model_1 = __webpack_require__(/*! src/modules/subscription/entities/subscription.model */ "./src/modules/subscription/entities/subscription.model.ts");
let App = class App {
    id;
    accountId;
    account;
    integrations;
    subscriptions;
    name;
    category;
    description;
    createdAt;
    updatedAt;
    deletedAt;
    createdBy;
    updatedBy;
    deletedBy;
};
exports.App = App;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], App.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], App.prototype, "accountId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => account_model_1.Account, (account) => account.apps, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'accountId' }),
    __metadata("design:type", typeof (_a = typeof account_model_1.Account !== "undefined" && account_model_1.Account) === "function" ? _a : Object)
], App.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => integration_model_1.Integration, (relation) => relation.app, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], App.prototype, "integrations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => subscription_model_1.Subscription, (relation) => relation.app, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], App.prototype, "subscriptions", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], App.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: app_entity_1.Category, default: app_entity_1.Category.None }),
    __metadata("design:type", typeof (_b = typeof app_entity_1.Category !== "undefined" && app_entity_1.Category) === "function" ? _b : Object)
], App.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], App.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], App.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], App.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], App.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], App.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], App.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], App.prototype, "deletedBy", void 0);
exports.App = App = __decorate([
    (0, typeorm_1.Entity)('apps')
], App);


/***/ }),

/***/ "./src/modules/app/handlers/app-created.handler.ts":
/*!*********************************************************!*\
  !*** ./src/modules/app/handlers/app-created.handler.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppCreatedHandler = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const app_created_command_1 = __webpack_require__(/*! ../commands/app-created.command */ "./src/modules/app/commands/app-created.command.ts");
const ai_service_1 = __webpack_require__(/*! src/modules/ai/ai.service */ "./src/modules/ai/ai.service.ts");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const app_service_1 = __webpack_require__(/*! ../app.service */ "./src/modules/app/app.service.ts");
const update_app_dto_1 = __webpack_require__(/*! ../dto/update-app.dto */ "./src/modules/app/dto/update-app.dto.ts");
const app_entity_1 = __webpack_require__(/*! ../entities/app.entity */ "./src/modules/app/entities/app.entity.ts");
let AppCreatedHandler = class AppCreatedHandler {
    logger;
    aiService;
    appService;
    constructor(logger, aiService, appService) {
        this.logger = logger;
        this.aiService = aiService;
        this.appService = appService;
    }
    async execute(command) {
        this.logger.debug('App created handler called', {
            correlationId: '8adf5d96-ec23-45bc-abf4-3d650c30a76a',
            command: JSON.stringify(command),
        });
        if (!command.entity.description && !command.entity.category) {
            const modelId = 'gpt-4o-mini-2024-07-18';
            const [description, category] = await Promise.all([
                this.aiService.processGenericPrompt({
                    modelId,
                    id: '9cae780f-327b-4e33-88f0-6f32adb6bf6c',
                    conversationId: 'f3c38e59-3f1f-4f7f-bb6b-090e8bf0530f',
                    timestamp: Date.now(),
                    content: `Short description for ${command.entity.name} dont include name`,
                    contentType: 'text',
                    debug: false,
                }),
                this.aiService.processGenericPrompt({
                    modelId,
                    id: '9cae780f-327b-4e33-88f0-6f32adb6bf6c',
                    conversationId: 'f3c38e59-3f1f-4f7f-bb6b-090e8bf0530f',
                    timestamp: Date.now(),
                    content: `return category that best suites ${command.entity.name}: ${Object.keys(app_entity_1.Category).join(',')}`,
                    contentType: 'text',
                    debug: false,
                }),
            ]);
            this.logger.debug(`App description auto generated from ai for app: ${command.entity.id}`, {
                correlationId: '7f12ee2c-2710-48cf-9fc0-27e3ef2169c5',
                appId: command.entity.id,
                description: JSON.stringify(description),
                category: JSON.stringify(category),
            });
            const updateDto = new update_app_dto_1.UpdateAppDto();
            updateDto.description = description.content;
            updateDto.category = category.content;
            await this.appService.update(command.entity.id, updateDto, command.entity.createdBy);
        }
        return {
            actionId: (0, uuid_1.v4)(),
        };
    }
};
exports.AppCreatedHandler = AppCreatedHandler;
exports.AppCreatedHandler = AppCreatedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(app_created_command_1.AppCreatedCommand),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, common_1.Inject)(ai_service_1.AiService)),
    __param(2, (0, common_1.Inject)(app_service_1.AppService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof ai_service_1.AiService !== "undefined" && ai_service_1.AiService) === "function" ? _b : Object, typeof (_c = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _c : Object])
], AppCreatedHandler);


/***/ }),

/***/ "./src/modules/app/handlers/app-removed.handler.ts":
/*!*********************************************************!*\
  !*** ./src/modules/app/handlers/app-removed.handler.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppRemovedHandler = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const app_removed_command_1 = __webpack_require__(/*! ../commands/app-removed.command */ "./src/modules/app/commands/app-removed.command.ts");
let AppRemovedHandler = class AppRemovedHandler {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.debug('App removed handler called', {
            correlationId: '4954e2c3-42c3-4aaf-b9ae-365f15d83ef6',
            command: JSON.stringify(command),
        });
        await new Promise((res) => res(true));
        return {
            actionId: crypto.randomUUID(),
        };
    }
};
exports.AppRemovedHandler = AppRemovedHandler;
exports.AppRemovedHandler = AppRemovedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(app_removed_command_1.AppRemovedCommand),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object])
], AppRemovedHandler);


/***/ }),

/***/ "./src/modules/app/handlers/app-updated.handler.ts":
/*!*********************************************************!*\
  !*** ./src/modules/app/handlers/app-updated.handler.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppUpdatedHandler = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const app_updated_command_1 = __webpack_require__(/*! ../commands/app-updated.command */ "./src/modules/app/commands/app-updated.command.ts");
let AppUpdatedHandler = class AppUpdatedHandler {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.debug('App updated handler called', {
            correlationId: '67a859be-a168-4574-bbc3-c05b27dc4612',
            command: JSON.stringify(command),
        });
        await new Promise((res) => res(true));
        return {
            actionId: crypto.randomUUID(),
        };
    }
};
exports.AppUpdatedHandler = AppUpdatedHandler;
exports.AppUpdatedHandler = AppUpdatedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(app_updated_command_1.AppUpdatedCommand),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object])
], AppUpdatedHandler);


/***/ }),

/***/ "./src/modules/auth/auth.controller.ts":
/*!*********************************************!*\
  !*** ./src/modules/auth/auth.controller.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const bcrypt = __importStar(__webpack_require__(/*! bcrypt */ "bcrypt"));
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/auth.service.ts");
const local_auth_guard_1 = __webpack_require__(/*! src/guards/local-auth.guard */ "./src/guards/local-auth.guard.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const login_dto_1 = __webpack_require__(/*! ./dto/login.dto */ "./src/modules/auth/dto/login.dto.ts");
const user_entity_1 = __webpack_require__(/*! ../user/entities/user.entity */ "./src/modules/user/entities/user.entity.ts");
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_service_1 = __webpack_require__(/*! ../user/user.service */ "./src/modules/user/user.service.ts");
const account_service_1 = __webpack_require__(/*! ../account/account.service */ "./src/modules/account/account.service.ts");
const register_dto_1 = __webpack_require__(/*! ./dto/register.dto */ "./src/modules/auth/dto/register.dto.ts");
const create_account_dto_1 = __webpack_require__(/*! ../account/dto/create-account.dto */ "./src/modules/account/dto/create-account.dto.ts");
const create_user_dto_1 = __webpack_require__(/*! ../user/dto/create-user.dto */ "./src/modules/user/dto/create-user.dto.ts");
const update_account_dto_1 = __webpack_require__(/*! ../account/dto/update-account.dto */ "./src/modules/account/dto/update-account.dto.ts");
let AuthController = class AuthController {
    logger;
    userService;
    accountService;
    dataSource;
    authService;
    constructor(logger, userService, accountService, dataSource, authService) {
        this.logger = logger;
        this.userService = userService;
        this.accountService = accountService;
        this.dataSource = dataSource;
        this.authService = authService;
    }
    login(req, body) {
        return this.authService.login(req.user);
    }
    async register(body) {
        if (body.password !== body.confirmPassword) {
            throw new common_1.BadRequestException();
        }
        const user = await this.dataSource.transaction(async (manager) => {
            const createAccountDto = new create_account_dto_1.CreateAccountDto();
            createAccountDto.name = `${body.username}'s Account`;
            const account = await this.accountService.createWithManager(createAccountDto, manager);
            const createUserDto = new create_user_dto_1.CreateUserDto();
            createUserDto.accountId = account.id;
            createUserDto.name = body.name;
            createUserDto.email = body.username;
            createUserDto.password = bcrypt.hashSync(body.password, 10);
            createUserDto.role = user_entity_1.Role.Owner;
            const user = await this.userService.createWithManager(createUserDto, manager);
            const updateAccountDto = new update_account_dto_1.UpdateAccountDto();
            updateAccountDto.createdBy = user.id;
            updateAccountDto.updatedBy = user.id;
            await this.accountService.updateWithManager(account.id, updateAccountDto, manager);
            return user;
        });
        return this.authService.login(user);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('login'),
    __param(0, (0, common_2.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_f = typeof login_dto_1.LoginDto !== "undefined" && login_dto_1.LoginDto) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof register_dto_1.RegisterDto !== "undefined" && register_dto_1.RegisterDto) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)({ path: 'auth', version: '1' }),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, common_1.Inject)(user_service_1.UserService)),
    __param(2, (0, common_1.Inject)(account_service_1.AccountService)),
    __param(3, (0, common_1.Inject)(typeorm_1.DataSource)),
    __param(4, (0, common_1.Inject)(auth_service_1.AuthService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _b : Object, typeof (_c = typeof account_service_1.AccountService !== "undefined" && account_service_1.AccountService) === "function" ? _c : Object, typeof (_d = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _d : Object, typeof (_e = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _e : Object])
], AuthController);


/***/ }),

/***/ "./src/modules/auth/auth.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/auth/auth.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const account_module_1 = __webpack_require__(/*! ../account/account.module */ "./src/modules/account/account.module.ts");
const casl_module_1 = __webpack_require__(/*! ../casl/casl.module */ "./src/modules/casl/casl.module.ts");
const user_module_1 = __webpack_require__(/*! ../user/user.module */ "./src/modules/user/user.module.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/modules/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/auth.service.ts");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const local_strategy_1 = __webpack_require__(/*! ./local.strategy */ "./src/modules/auth/local.strategy.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./jwt.strategy */ "./src/modules/auth/jwt.strategy.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            logging_1.LoggingModule,
            casl_module_1.CaslModule,
            axios_1.HttpModule,
            account_module_1.AccountModule,
            user_module_1.UserModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: '7ac54472-4dcf-4fa1-be39-8967d47d02d6',
                signOptions: { expiresIn: '1h' },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),

/***/ "./src/modules/auth/auth.service.ts":
/*!******************************************!*\
  !*** ./src/modules/auth/auth.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const bcrypt = __importStar(__webpack_require__(/*! bcrypt */ "bcrypt"));
const user_service_1 = __webpack_require__(/*! ../user/user.service */ "./src/modules/user/user.service.ts");
let AuthService = class AuthService {
    logger;
    userService;
    jwtService;
    constructor(logger, userService, jwtService) {
        this.logger = logger;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validateUser(username, password) {
        const user = await this.userService.findOneByEmail(username);
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            return user;
        }
        return null;
    }
    login(user) {
        const payload = {
            sub: user.id,
            username: user.email,
            role: user.role,
            accountId: user.accountId,
        };
        return {
            access_token: this.jwtService.sign(payload),
            refresh_token: this.jwtService.sign(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, common_1.Inject)(user_service_1.UserService)),
    __param(2, (0, common_1.Inject)(jwt_1.JwtService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _b : Object, typeof (_c = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _c : Object])
], AuthService);


/***/ }),

/***/ "./src/modules/auth/dto/login.dto.ts":
/*!*******************************************!*\
  !*** ./src/modules/auth/dto/login.dto.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class LoginDto {
    username;
    password;
}
exports.LoginDto = LoginDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The email address of the user' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The password of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.IsStrongPassword)(),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);


/***/ }),

/***/ "./src/modules/auth/dto/register.dto.ts":
/*!**********************************************!*\
  !*** ./src/modules/auth/dto/register.dto.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterDto = exports.MatchPasswordsConstraint = void 0;
exports.MatchPasswords = MatchPasswords;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_validator_2 = __webpack_require__(/*! class-validator */ "class-validator");
let MatchPasswordsConstraint = class MatchPasswordsConstraint {
    validate(confirmPassword, args) {
        const object = args.object;
        return object.password === confirmPassword;
    }
    defaultMessage(args) {
        return 'Password and confirmPassword do not match';
    }
};
exports.MatchPasswordsConstraint = MatchPasswordsConstraint;
exports.MatchPasswordsConstraint = MatchPasswordsConstraint = __decorate([
    (0, class_validator_2.ValidatorConstraint)({ async: false })
], MatchPasswordsConstraint);
function MatchPasswords(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_2.registerDecorator)({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: MatchPasswordsConstraint,
        });
    };
}
class RegisterDto {
    name;
    username;
    password;
    confirmPassword;
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The email address of the user' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The password of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.IsStrongPassword)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Confirm password' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.IsStrongPassword)(),
    MatchPasswords({ message: 'Passwords do not match' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "confirmPassword", void 0);


/***/ }),

/***/ "./src/modules/auth/jwt.strategy.ts":
/*!******************************************!*\
  !*** ./src/modules/auth/jwt.strategy.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: '7ac54472-4dcf-4fa1-be39-8967d47d02d6',
        });
    }
    validate(payload) {
        return {
            id: payload.sub,
            email: payload.username,
            role: payload.role,
            accountId: payload.accountId,
        };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], JwtStrategy);


/***/ }),

/***/ "./src/modules/auth/local.strategy.ts":
/*!********************************************!*\
  !*** ./src/modules/auth/local.strategy.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/auth.service.ts");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    authService;
    constructor(authService) {
        super();
        this.authService = authService;
    }
    async validate(username, password) {
        const user = await this.authService.validateUser(username, password);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
exports.LocalStrategy = LocalStrategy;
exports.LocalStrategy = LocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(auth_service_1.AuthService)),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);


/***/ }),

/***/ "./src/modules/casl/casl-ability.factory/casl-ability.factory.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/casl/casl-ability.factory/casl-ability.factory.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CaslAbilityFactory = exports.Action = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_entity_1 = __webpack_require__(/*! src/modules/user/entities/user.entity */ "./src/modules/user/entities/user.entity.ts");
const ability_1 = __webpack_require__(/*! @casl/ability */ "@casl/ability");
const account_entity_1 = __webpack_require__(/*! src/modules/account/entities/account.entity */ "./src/modules/account/entities/account.entity.ts");
const user_service_1 = __webpack_require__(/*! src/modules/user/user.service */ "./src/modules/user/user.service.ts");
const app_entity_1 = __webpack_require__(/*! src/modules/app/entities/app.entity */ "./src/modules/app/entities/app.entity.ts");
const workspace_entity_1 = __webpack_require__(/*! src/modules/workspace/entities/workspace.entity */ "./src/modules/workspace/entities/workspace.entity.ts");
const integration_entity_1 = __webpack_require__(/*! src/modules/integration/entities/integration.entity */ "./src/modules/integration/entities/integration.entity.ts");
const department_entity_1 = __webpack_require__(/*! src/modules/department/entities/department.entity */ "./src/modules/department/entities/department.entity.ts");
const subscription_entity_1 = __webpack_require__(/*! src/modules/subscription/entities/subscription.entity */ "./src/modules/subscription/entities/subscription.entity.ts");
var Action;
(function (Action) {
    Action["Manage"] = "manage";
    Action["Create"] = "create";
    Action["Read"] = "read";
    Action["Update"] = "update";
    Action["Delete"] = "delete";
})(Action || (exports.Action = Action = {}));
let CaslAbilityFactory = class CaslAbilityFactory {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async createForUser(userId) {
        const user = await this.userService.findOne(userId);
        const { can, build } = new ability_1.AbilityBuilder(ability_1.createMongoAbility);
        if ([user_entity_1.Role.Admin].includes(user.role)) {
            can(Action.Manage, 'all');
        }
        else {
            can(Action.Create, account_entity_1.Account);
            can(Action.Read, account_entity_1.Account, { id: user.accountId });
            can(Action.Update, account_entity_1.Account, { createdBy: user.id });
            can(Action.Delete, account_entity_1.Account, { createdBy: user.id });
            can(Action.Create, department_entity_1.Department);
            can(Action.Read, department_entity_1.Department, { accountId: user.accountId });
            can(Action.Update, department_entity_1.Department, { createdBy: user.id });
            can(Action.Delete, department_entity_1.Department, { createdBy: user.id });
            can(Action.Create, app_entity_1.App);
            can(Action.Read, app_entity_1.App, { accountId: user.accountId });
            can(Action.Update, app_entity_1.App, { createdBy: user.id });
            can(Action.Delete, app_entity_1.App, { createdBy: user.id });
            can(Action.Create, integration_entity_1.Integration);
            can(Action.Read, integration_entity_1.Integration, { accountId: user.accountId });
            can(Action.Update, integration_entity_1.Integration, { createdBy: user.id });
            can(Action.Delete, integration_entity_1.Integration, { createdBy: user.id });
            can(Action.Create, subscription_entity_1.Subscription);
            can(Action.Read, subscription_entity_1.Subscription, { accountId: user.accountId });
            can(Action.Update, subscription_entity_1.Subscription, { createdBy: user.id });
            can(Action.Delete, subscription_entity_1.Subscription, { createdBy: user.id });
            can(Action.Create, workspace_entity_1.Workspace);
            can(Action.Read, workspace_entity_1.Workspace, { accountId: user.accountId });
            can(Action.Update, workspace_entity_1.Workspace, { createdBy: user.id });
            can(Action.Delete, workspace_entity_1.Workspace, { createdBy: user.id });
            can(Action.Create, user_entity_1.User);
            can(Action.Read, user_entity_1.User, { accountId: user.accountId });
            can(Action.Update, user_entity_1.User, { id: user.id });
            can(Action.Delete, user_entity_1.User, { createdBy: user.id });
        }
        return build({
            detectSubjectType: (item) => item.constructor,
        });
    }
};
exports.CaslAbilityFactory = CaslAbilityFactory;
exports.CaslAbilityFactory = CaslAbilityFactory = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(user_service_1.UserService)),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], CaslAbilityFactory);


/***/ }),

/***/ "./src/modules/casl/casl.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/casl/casl.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CaslModule = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const policies_guard_1 = __webpack_require__(/*! src/guards/policies.guard */ "./src/guards/policies.guard.ts");
const casl_ability_factory_1 = __webpack_require__(/*! ./casl-ability.factory/casl-ability.factory */ "./src/modules/casl/casl-ability.factory/casl-ability.factory.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_model_1 = __webpack_require__(/*! ../user/entities/user.model */ "./src/modules/user/entities/user.model.ts");
const user_service_1 = __webpack_require__(/*! ../user/user.service */ "./src/modules/user/user.service.ts");
const user_mapper_1 = __webpack_require__(/*! ../user/dto/user.mapper */ "./src/modules/user/dto/user.mapper.ts");
let CaslModule = class CaslModule {
};
exports.CaslModule = CaslModule;
exports.CaslModule = CaslModule = __decorate([
    (0, common_1.Module)({
        imports: [logging_1.LoggingModule, typeorm_1.TypeOrmModule.forFeature([user_model_1.User])],
        providers: [casl_ability_factory_1.CaslAbilityFactory, policies_guard_1.PoliciesGuard, user_service_1.UserService, user_mapper_1.UserMapper],
        exports: [casl_ability_factory_1.CaslAbilityFactory, policies_guard_1.PoliciesGuard],
    })
], CaslModule);


/***/ }),

/***/ "./src/modules/department/entities/department.entity.ts":
/*!**************************************************************!*\
  !*** ./src/modules/department/entities/department.entity.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Department = void 0;
class Department {
    props;
    constructor(props) {
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
            updatedAt: props.updatedAt ?? new Date(),
        };
    }
    get id() {
        return this.props.id;
    }
    get accountId() {
        return this.props.accountId;
    }
    get name() {
        return this.props.name;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    get deletedAt() {
        return this.props.deletedAt;
    }
    get createdBy() {
        return this.props.createdBy;
    }
    get updatedBy() {
        return this.props.updatedBy;
    }
    get deletedBy() {
        return this.props.deletedBy;
    }
    updateName(newName) {
        this.props.name = newName;
        this.touch();
    }
    softDelete(byUserId) {
        this.props.deletedAt = new Date();
        if (byUserId) {
            this.props.deletedBy = byUserId;
        }
        this.touch();
    }
    updateOwner(id) {
        this.props.createdBy = id;
        this.touch();
    }
    updateUpdatedBy(id) {
        this.props.updatedBy = id;
        this.touch();
    }
    restore() {
        this.props.deletedAt = undefined;
        this.props.deletedBy = undefined;
        this.touch();
    }
    touch(id) {
        this.props.updatedAt = new Date();
        if (id) {
            this.props.updatedBy = id;
        }
    }
}
exports.Department = Department;


/***/ }),

/***/ "./src/modules/department/entities/department.model.ts":
/*!*************************************************************!*\
  !*** ./src/modules/department/entities/department.model.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Department = void 0;
const account_model_1 = __webpack_require__(/*! src/modules/account/entities/account.model */ "./src/modules/account/entities/account.model.ts");
const user_model_1 = __webpack_require__(/*! src/modules/user/entities/user.model */ "./src/modules/user/entities/user.model.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Department = class Department {
    id;
    accountId;
    account;
    users;
    name;
    createdAt;
    updatedAt;
    deletedAt;
    createdBy;
    updatedBy;
    deletedBy;
};
exports.Department = Department;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Department.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Department.prototype, "accountId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => account_model_1.Account, (account) => account.departments, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'accountId' }),
    __metadata("design:type", typeof (_a = typeof account_model_1.Account !== "undefined" && account_model_1.Account) === "function" ? _a : Object)
], Department.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_model_1.User, (user) => user.department, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Department.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Department.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Department.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Department.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Department.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Department.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Department.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Department.prototype, "deletedBy", void 0);
exports.Department = Department = __decorate([
    (0, typeorm_1.Entity)('departments')
], Department);


/***/ }),

/***/ "./src/modules/health/health.module.ts":
/*!*********************************************!*\
  !*** ./src/modules/health/health.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const terminus_1 = __webpack_require__(/*! @nestjs/terminus */ "@nestjs/terminus");
let HealthModule = class HealthModule {
};
exports.HealthModule = HealthModule;
exports.HealthModule = HealthModule = __decorate([
    (0, common_1.Module)({
        imports: [terminus_1.TerminusModule],
    })
], HealthModule);


/***/ }),

/***/ "./src/modules/integration/commands/integration-created.command.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/integration/commands/integration-created.command.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntegrationCreatedCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
class IntegrationCreatedCommand extends cqrs_1.Command {
    entity;
    constructor(entity) {
        super();
        this.entity = entity;
    }
}
exports.IntegrationCreatedCommand = IntegrationCreatedCommand;


/***/ }),

/***/ "./src/modules/integration/commands/integration-removed.command.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/integration/commands/integration-removed.command.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntegrationRemovedCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
class IntegrationRemovedCommand extends cqrs_1.Command {
    entity;
    constructor(entity) {
        super();
        this.entity = entity;
    }
}
exports.IntegrationRemovedCommand = IntegrationRemovedCommand;


/***/ }),

/***/ "./src/modules/integration/commands/integration-updated.command.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/integration/commands/integration-updated.command.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntegrationUpdatedCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
class IntegrationUpdatedCommand extends cqrs_1.Command {
    entity;
    constructor(entity) {
        super();
        this.entity = entity;
    }
}
exports.IntegrationUpdatedCommand = IntegrationUpdatedCommand;


/***/ }),

/***/ "./src/modules/integration/dto/create-integration.dto.ts":
/*!***************************************************************!*\
  !*** ./src/modules/integration/dto/create-integration.dto.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateIntegrationDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateIntegrationDto {
    accountId;
    appId;
    name;
    createdBy;
    updatedBy;
}
exports.CreateIntegrationDto = CreateIntegrationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIntegrationDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The id of the app' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateIntegrationDto.prototype, "appId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the workspace' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateIntegrationDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIntegrationDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIntegrationDto.prototype, "updatedBy", void 0);


/***/ }),

/***/ "./src/modules/integration/dto/integration.dto.ts":
/*!********************************************************!*\
  !*** ./src/modules/integration/dto/integration.dto.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntegrationDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class IntegrationDto {
    constructor(partial) {
        Object.assign(this, partial);
    }
    accountId;
    userId;
    name;
    createdBy;
    updatedBy;
    deletedBy;
    createdAt;
    updatedAt;
    deletedAt;
}
exports.IntegrationDto = IntegrationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The id of the account' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], IntegrationDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The id of the user' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], IntegrationDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the integration' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IntegrationDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], IntegrationDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], IntegrationDto.prototype, "updatedBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], IntegrationDto.prototype, "deletedBy", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], IntegrationDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], IntegrationDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], IntegrationDto.prototype, "deletedAt", void 0);


/***/ }),

/***/ "./src/modules/integration/dto/integration.mapper.ts":
/*!***********************************************************!*\
  !*** ./src/modules/integration/dto/integration.mapper.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntegrationMapper = void 0;
const integration_entity_1 = __webpack_require__(/*! ../entities/integration.entity */ "./src/modules/integration/entities/integration.entity.ts");
const integration_dto_1 = __webpack_require__(/*! ./integration.dto */ "./src/modules/integration/dto/integration.dto.ts");
class IntegrationMapper {
    static toInterface(user) {
        return new integration_dto_1.IntegrationDto(user.props);
    }
    toInterface(user) {
        return IntegrationMapper.toInterface(user);
    }
    static toDomain(user) {
        return new integration_entity_1.Integration({
            ...user,
        });
    }
    toDomain(user) {
        return IntegrationMapper.toDomain(user);
    }
    static toPersistence(user) {
        return {
            ...user.props,
        };
    }
    toPersistence(user) {
        return IntegrationMapper.toPersistence(user);
    }
}
exports.IntegrationMapper = IntegrationMapper;


/***/ }),

/***/ "./src/modules/integration/dto/update-integration.dto.ts":
/*!***************************************************************!*\
  !*** ./src/modules/integration/dto/update-integration.dto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateIntegrationDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_integration_dto_1 = __webpack_require__(/*! ./create-integration.dto */ "./src/modules/integration/dto/create-integration.dto.ts");
class UpdateIntegrationDto extends (0, mapped_types_1.PartialType)(create_integration_dto_1.CreateIntegrationDto) {
}
exports.UpdateIntegrationDto = UpdateIntegrationDto;


/***/ }),

/***/ "./src/modules/integration/entities/integration.entity.ts":
/*!****************************************************************!*\
  !*** ./src/modules/integration/entities/integration.entity.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Integration = void 0;
class Integration {
    props;
    constructor(props) {
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
            updatedAt: props.updatedAt ?? new Date(),
        };
    }
    get id() {
        return this.props.id;
    }
    get accountId() {
        return this.props.accountId;
    }
    get appId() {
        return this.props.appId;
    }
    get name() {
        return this.props.name;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    get deletedAt() {
        return this.props.deletedAt;
    }
    get createdBy() {
        return this.props.createdBy;
    }
    get updatedBy() {
        return this.props.updatedBy;
    }
    get deletedBy() {
        return this.props.deletedBy;
    }
    updateName(newName) {
        this.props.name = newName;
        this.touch();
    }
    softDelete(byUserId) {
        this.props.deletedAt = new Date();
        if (byUserId) {
            this.props.deletedBy = byUserId;
        }
        this.touch();
    }
    updateOwner(id) {
        this.props.createdBy = id;
        this.touch();
    }
    updateUpdatedBy(id) {
        this.props.updatedBy = id;
        this.touch();
    }
    restore() {
        this.props.deletedAt = undefined;
        this.props.deletedBy = undefined;
        this.touch();
    }
    touch(id) {
        this.props.updatedAt = new Date();
        if (id) {
            this.props.updatedBy = id;
        }
    }
}
exports.Integration = Integration;


/***/ }),

/***/ "./src/modules/integration/entities/integration.model.ts":
/*!***************************************************************!*\
  !*** ./src/modules/integration/entities/integration.model.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Integration = void 0;
const account_model_1 = __webpack_require__(/*! src/modules/account/entities/account.model */ "./src/modules/account/entities/account.model.ts");
const app_model_1 = __webpack_require__(/*! src/modules/app/entities/app.model */ "./src/modules/app/entities/app.model.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Integration = class Integration {
    id;
    accountId;
    account;
    appId;
    app;
    name;
    createdAt;
    updatedAt;
    deletedAt;
    createdBy;
    updatedBy;
    deletedBy;
};
exports.Integration = Integration;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Integration.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Integration.prototype, "accountId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => account_model_1.Account, (account) => account.users, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'accountId' }),
    __metadata("design:type", typeof (_a = typeof account_model_1.Account !== "undefined" && account_model_1.Account) === "function" ? _a : Object)
], Integration.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Integration.prototype, "appId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => app_model_1.App, (relation) => relation.integrations, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'appId' }),
    __metadata("design:type", typeof (_b = typeof app_model_1.App !== "undefined" && app_model_1.App) === "function" ? _b : Object)
], Integration.prototype, "app", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Integration.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Integration.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Integration.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Integration.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Integration.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Integration.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Integration.prototype, "deletedBy", void 0);
exports.Integration = Integration = __decorate([
    (0, typeorm_1.Entity)('integrations')
], Integration);


/***/ }),

/***/ "./src/modules/integration/handlers/integration-created.handler.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/integration/handlers/integration-created.handler.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntegrationCreatedHandler = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const integration_created_command_1 = __webpack_require__(/*! ../commands/integration-created.command */ "./src/modules/integration/commands/integration-created.command.ts");
let IntegrationCreatedHandler = class IntegrationCreatedHandler {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.debug('Integration created handler called', {
            correlationId: '8adf5d96-ec23-45bc-abf4-3d650c30a76a',
            command: JSON.stringify(command),
        });
        await new Promise((res) => res(true));
        return {
            actionId: crypto.randomUUID(),
        };
    }
};
exports.IntegrationCreatedHandler = IntegrationCreatedHandler;
exports.IntegrationCreatedHandler = IntegrationCreatedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(integration_created_command_1.IntegrationCreatedCommand),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object])
], IntegrationCreatedHandler);


/***/ }),

/***/ "./src/modules/integration/handlers/integration-removed.handler.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/integration/handlers/integration-removed.handler.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntegrationRemovedHandler = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const integration_removed_command_1 = __webpack_require__(/*! ../commands/integration-removed.command */ "./src/modules/integration/commands/integration-removed.command.ts");
let IntegrationRemovedHandler = class IntegrationRemovedHandler {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.debug('Integration removed handler called', {
            correlationId: '4954e2c3-42c3-4aaf-b9ae-365f15d83ef6',
            command: JSON.stringify(command),
        });
        await new Promise((res) => res(true));
        return {
            actionId: crypto.randomUUID(),
        };
    }
};
exports.IntegrationRemovedHandler = IntegrationRemovedHandler;
exports.IntegrationRemovedHandler = IntegrationRemovedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(integration_removed_command_1.IntegrationRemovedCommand),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object])
], IntegrationRemovedHandler);


/***/ }),

/***/ "./src/modules/integration/handlers/integration-updated.handler.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/integration/handlers/integration-updated.handler.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntegrationUpdatedHandler = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const integration_updated_command_1 = __webpack_require__(/*! ../commands/integration-updated.command */ "./src/modules/integration/commands/integration-updated.command.ts");
let IntegrationUpdatedHandler = class IntegrationUpdatedHandler {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.debug('Integration updated handler called', {
            correlationId: '67a859be-a168-4574-bbc3-c05b27dc4612',
            command: JSON.stringify(command),
        });
        await new Promise((res) => res(true));
        return {
            actionId: crypto.randomUUID(),
        };
    }
};
exports.IntegrationUpdatedHandler = IntegrationUpdatedHandler;
exports.IntegrationUpdatedHandler = IntegrationUpdatedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(integration_updated_command_1.IntegrationUpdatedCommand),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object])
], IntegrationUpdatedHandler);


/***/ }),

/***/ "./src/modules/integration/integration.controller.ts":
/*!***********************************************************!*\
  !*** ./src/modules/integration/integration.controller.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntegrationController = void 0;
const dtos_1 = __webpack_require__(/*! @app/dtos */ "./libs/dtos/src/index.ts");
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! src/guards/jwt-auth.guard */ "./src/guards/jwt-auth.guard.ts");
const policies_guard_1 = __webpack_require__(/*! src/guards/policies.guard */ "./src/guards/policies.guard.ts");
const logging_cache_interceptor_1 = __webpack_require__(/*! src/interceptors/logging-cache.interceptor */ "./src/interceptors/logging-cache.interceptor.ts");
const casl_ability_factory_1 = __webpack_require__(/*! ../casl/casl-ability.factory/casl-ability.factory */ "./src/modules/casl/casl-ability.factory/casl-ability.factory.ts");
const integration_created_command_1 = __webpack_require__(/*! ./commands/integration-created.command */ "./src/modules/integration/commands/integration-created.command.ts");
const create_integration_dto_1 = __webpack_require__(/*! ./dto/create-integration.dto */ "./src/modules/integration/dto/create-integration.dto.ts");
const update_integration_dto_1 = __webpack_require__(/*! ./dto/update-integration.dto */ "./src/modules/integration/dto/update-integration.dto.ts");
const integration_mapper_1 = __webpack_require__(/*! ./dto/integration.mapper */ "./src/modules/integration/dto/integration.mapper.ts");
const integration_entity_1 = __webpack_require__(/*! ./entities/integration.entity */ "./src/modules/integration/entities/integration.entity.ts");
const integration_service_1 = __webpack_require__(/*! ./integration.service */ "./src/modules/integration/integration.service.ts");
const integration_updated_command_1 = __webpack_require__(/*! ./commands/integration-updated.command */ "./src/modules/integration/commands/integration-updated.command.ts");
const integration_removed_command_1 = __webpack_require__(/*! ./commands/integration-removed.command */ "./src/modules/integration/commands/integration-removed.command.ts");
let IntegrationController = class IntegrationController {
    logger;
    service;
    mapper;
    caslAbilityFactory;
    commandBus;
    constructor(logger, service, mapper, caslAbilityFactory, commandBus) {
        this.logger = logger;
        this.service = service;
        this.mapper = mapper;
        this.caslAbilityFactory = caslAbilityFactory;
        this.commandBus = commandBus;
    }
    async create(createIntegrationDto, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        if (!ability.can(casl_ability_factory_1.Action.Create, integration_entity_1.Integration)) {
            throw new common_1.UnauthorizedException();
        }
        const result = await this.service.create(createIntegrationDto, req.user.id);
        void this.commandBus.execute(new integration_created_command_1.IntegrationCreatedCommand(result));
        return this.mapper.toInterface(result);
    }
    async findAll(skip = 0, take = 100, req) {
        const result = await this.service.findAll(skip, take, {
            accountId: req.user.accountId,
        });
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        return {
            ...result,
            data: result.data
                .filter((entity) => ability.can(casl_ability_factory_1.Action.Read, entity))
                .map((entity) => this.mapper.toInterface(entity)),
        };
    }
    async findOne(id, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        const app = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Read, app)) {
            throw new common_1.UnauthorizedException();
        }
        return this.mapper.toInterface(app);
    }
    async update(id, updateIntegrationDto, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        const app = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Update, app)) {
            throw new common_1.UnauthorizedException();
        }
        const updated = await this.service.update(id, updateIntegrationDto, req.user.id);
        void this.commandBus.execute(new integration_updated_command_1.IntegrationUpdatedCommand(updated));
        return this.mapper.toInterface(updated);
    }
    async remove(id, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        const entity = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Delete, entity)) {
            throw new common_1.UnauthorizedException();
        }
        await this.service.remove(id, req.user.id);
        void this.commandBus.execute(new integration_removed_command_1.IntegrationRemovedCommand(entity));
        return entity.id;
    }
};
exports.IntegrationController = IntegrationController;
__decorate([
    (0, common_1.Post)(),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Create, integration_entity_1.Integration)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof create_integration_dto_1.CreateIntegrationDto !== "undefined" && create_integration_dto_1.CreateIntegrationDto) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", Promise)
], IntegrationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Read, integration_entity_1.Integration)),
    (0, swagger_1.ApiQuery)({ name: 'skip', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'take', required: false, type: Number }),
    (0, swagger_1.ApiOkResponse)({ type: dtos_1.FindAllResponseDto }),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], IntegrationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Read, integration_entity_1.Integration)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], IntegrationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Update, integration_entity_1.Integration)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_h = typeof update_integration_dto_1.UpdateIntegrationDto !== "undefined" && update_integration_dto_1.UpdateIntegrationDto) === "function" ? _h : Object, Object]),
    __metadata("design:returntype", Promise)
], IntegrationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Delete, integration_entity_1.Integration)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], IntegrationController.prototype, "remove", null);
exports.IntegrationController = IntegrationController = __decorate([
    (0, common_1.Controller)({ path: 'integrations', version: '1' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, policies_guard_1.PoliciesGuard),
    (0, common_1.UseInterceptors)(logging_cache_interceptor_1.ControllerCacheInterceptor, common_1.ClassSerializerInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, common_1.Inject)(integration_service_1.IntegrationService)),
    __param(2, (0, common_1.Inject)(integration_mapper_1.IntegrationMapper)),
    __param(3, (0, common_1.Inject)(casl_ability_factory_1.CaslAbilityFactory)),
    __param(4, (0, common_1.Inject)(cqrs_1.CommandBus)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof integration_service_1.IntegrationService !== "undefined" && integration_service_1.IntegrationService) === "function" ? _b : Object, typeof (_c = typeof integration_mapper_1.IntegrationMapper !== "undefined" && integration_mapper_1.IntegrationMapper) === "function" ? _c : Object, typeof (_d = typeof casl_ability_factory_1.CaslAbilityFactory !== "undefined" && casl_ability_factory_1.CaslAbilityFactory) === "function" ? _d : Object, typeof (_e = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _e : Object])
], IntegrationController);


/***/ }),

/***/ "./src/modules/integration/integration.module.ts":
/*!*******************************************************!*\
  !*** ./src/modules/integration/integration.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntegrationModule = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const casl_module_1 = __webpack_require__(/*! ../casl/casl.module */ "./src/modules/casl/casl.module.ts");
const user_model_1 = __webpack_require__(/*! ../user/entities/user.model */ "./src/modules/user/entities/user.model.ts");
const integration_mapper_1 = __webpack_require__(/*! ./dto/integration.mapper */ "./src/modules/integration/dto/integration.mapper.ts");
const integration_model_1 = __webpack_require__(/*! ./entities/integration.model */ "./src/modules/integration/entities/integration.model.ts");
const integration_created_handler_1 = __webpack_require__(/*! ./handlers/integration-created.handler */ "./src/modules/integration/handlers/integration-created.handler.ts");
const integration_removed_handler_1 = __webpack_require__(/*! ./handlers/integration-removed.handler */ "./src/modules/integration/handlers/integration-removed.handler.ts");
const integration_updated_handler_1 = __webpack_require__(/*! ./handlers/integration-updated.handler */ "./src/modules/integration/handlers/integration-updated.handler.ts");
const integration_controller_1 = __webpack_require__(/*! ./integration.controller */ "./src/modules/integration/integration.controller.ts");
const integration_service_1 = __webpack_require__(/*! ./integration.service */ "./src/modules/integration/integration.service.ts");
let IntegrationModule = class IntegrationModule {
};
exports.IntegrationModule = IntegrationModule;
exports.IntegrationModule = IntegrationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            logging_1.LoggingModule,
            typeorm_1.TypeOrmModule.forFeature([user_model_1.User, integration_model_1.Integration]),
            casl_module_1.CaslModule,
        ],
        controllers: [integration_controller_1.IntegrationController],
        providers: [
            integration_mapper_1.IntegrationMapper,
            integration_service_1.IntegrationService,
            integration_created_handler_1.IntegrationCreatedHandler,
            integration_updated_handler_1.IntegrationUpdatedHandler,
            integration_removed_handler_1.IntegrationRemovedHandler,
        ],
        exports: [integration_service_1.IntegrationService],
    })
], IntegrationModule);


/***/ }),

/***/ "./src/modules/integration/integration.service.ts":
/*!********************************************************!*\
  !*** ./src/modules/integration/integration.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntegrationService = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const integration_mapper_1 = __webpack_require__(/*! ./dto/integration.mapper */ "./src/modules/integration/dto/integration.mapper.ts");
const integration_model_1 = __webpack_require__(/*! ./entities/integration.model */ "./src/modules/integration/entities/integration.model.ts");
let IntegrationService = class IntegrationService {
    logger;
    repo;
    mapper;
    constructor(logger, repo, mapper) {
        this.logger = logger;
        this.repo = repo;
        this.mapper = mapper;
    }
    async createWithManager(createIntegrationDto, manager) {
        const repo = manager.getRepository(integration_model_1.Integration);
        const entity = repo.create({ ...createIntegrationDto });
        const result = await repo.save(entity);
        return this.mapper.toDomain(result);
    }
    async create(createIntegrationDto, createdBy) {
        const entity = this.repo.create({ ...createIntegrationDto, createdBy });
        const result = await this.repo.save(entity);
        return this.mapper.toDomain(result);
    }
    async findAll(skip = 0, take = 100, where) {
        try {
            const [entities, count] = await this.repo.findAndCount({
                skip,
                take,
                where,
            });
            return {
                data: entities.map((entity) => this.mapper.toDomain(entity)),
                pagination: {
                    total: count,
                    skip,
                    take,
                    hasNextPage: skip + take < count,
                },
            };
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.findAll.name} encountered an error`, {
                correlationId: '6d437955-6b3a-417d-825b-3f43dedd8825',
                err: JSON.stringify(err),
            });
            return {
                data: [],
                pagination: { total: 0, skip: 0, take, hasNextPage: false },
            };
        }
    }
    async findOne(id) {
        try {
            const entity = await this.repo.findOneBy({ id });
            if (!entity) {
                throw new common_1.NotFoundException();
            }
            return this.mapper.toDomain(entity);
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.findOne.name} encountered an error`, {
                correlationId: '6acb4b57-7592-4f08-869c-b4a14cddd072',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async findOneByName(name) {
        try {
            const model = await this.repo.findOneBy({ name });
            if (!model) {
                throw new common_1.NotFoundException();
            }
            return this.mapper.toDomain(model);
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.findOneByName.name} encountered an error`, {
                correlationId: '7cce84d8-8f89-4058-8d2e-af450cfad2d3',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async updateWithManager(id, updateIntegrationDto, manager) {
        try {
            const repo = manager.getRepository(integration_model_1.Integration);
            const model = await repo.findOneBy({ id });
            if (!model) {
                throw new common_1.NotFoundException();
            }
            const entity = this.mapper.toDomain(model);
            if (updateIntegrationDto.name) {
                entity.updateName(updateIntegrationDto.name);
            }
            if (updateIntegrationDto.createdBy) {
                entity.updateOwner(updateIntegrationDto.createdBy);
            }
            if (updateIntegrationDto.updatedBy) {
                entity.updateUpdatedBy(updateIntegrationDto.updatedBy);
            }
            await repo.update(entity.id, this.mapper.toPersistence(entity));
            return entity;
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.updateWithManager.name} encountered an error`, {
                correlationId: '6befde88-ff55-4a59-9c7b-8b47a5980dd4',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async update(id, updateIntegrationDto, updatedBy) {
        try {
            const entity = await this.findOne(id);
            if (updateIntegrationDto.name) {
                entity.updateName(updateIntegrationDto.name);
            }
            entity.updateUpdatedBy(updatedBy);
            await this.repo.update(entity.id, this.mapper.toPersistence(entity));
            return entity;
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.update.name} encountered an error`, {
                correlationId: '6befde88-ff55-4a59-9c7b-8b47a5980dd4',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async remove(id, removedBy) {
        try {
            const entity = await this.findOne(id);
            entity.softDelete(removedBy);
            await this.repo.update(entity.id, this.mapper.toPersistence(entity));
            return entity;
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.remove.name} encountered an error`, {
                correlationId: 'b76287ba-c244-475f-adcb-52c6917ba739',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
};
exports.IntegrationService = IntegrationService;
exports.IntegrationService = IntegrationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, typeorm_1.InjectRepository)(integration_model_1.Integration)),
    __param(2, (0, common_1.Inject)(integration_mapper_1.IntegrationMapper)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof integration_mapper_1.IntegrationMapper !== "undefined" && integration_mapper_1.IntegrationMapper) === "function" ? _c : Object])
], IntegrationService);


/***/ }),

/***/ "./src/modules/subscription/commands/subscription-created.command.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/subscription/commands/subscription-created.command.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubscriptionCreatedCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
class SubscriptionCreatedCommand extends cqrs_1.Command {
    entity;
    constructor(entity) {
        super();
        this.entity = entity;
    }
}
exports.SubscriptionCreatedCommand = SubscriptionCreatedCommand;


/***/ }),

/***/ "./src/modules/subscription/commands/subscription-removed.command.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/subscription/commands/subscription-removed.command.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubscriptionRemovedCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
class SubscriptionRemovedCommand extends cqrs_1.Command {
    entity;
    constructor(entity) {
        super();
        this.entity = entity;
    }
}
exports.SubscriptionRemovedCommand = SubscriptionRemovedCommand;


/***/ }),

/***/ "./src/modules/subscription/commands/subscription-updated.command.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/subscription/commands/subscription-updated.command.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubscriptionUpdatedCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
class SubscriptionUpdatedCommand extends cqrs_1.Command {
    entity;
    constructor(entity) {
        super();
        this.entity = entity;
    }
}
exports.SubscriptionUpdatedCommand = SubscriptionUpdatedCommand;


/***/ }),

/***/ "./src/modules/subscription/dto/create-subscription.dto.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/subscription/dto/create-subscription.dto.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateSubscriptionDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateSubscriptionDto {
    accountId;
    appId;
    expression;
    createdBy;
    updatedBy;
}
exports.CreateSubscriptionDto = CreateSubscriptionDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSubscriptionDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The id of the app' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSubscriptionDto.prototype, "appId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The expression of the subscription' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSubscriptionDto.prototype, "expression", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSubscriptionDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSubscriptionDto.prototype, "updatedBy", void 0);


/***/ }),

/***/ "./src/modules/subscription/dto/subscription.dto.ts":
/*!**********************************************************!*\
  !*** ./src/modules/subscription/dto/subscription.dto.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubscriptionDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class SubscriptionDto {
    constructor(partial) {
        Object.assign(this, partial);
    }
    accountId;
    expression;
    createdBy;
    updatedBy;
    deletedBy;
    createdAt;
    updatedAt;
    deletedAt;
}
exports.SubscriptionDto = SubscriptionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The id of the account' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SubscriptionDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The expression of the subscription' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubscriptionDto.prototype, "expression", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SubscriptionDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SubscriptionDto.prototype, "updatedBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SubscriptionDto.prototype, "deletedBy", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], SubscriptionDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], SubscriptionDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], SubscriptionDto.prototype, "deletedAt", void 0);


/***/ }),

/***/ "./src/modules/subscription/dto/subscription.mapper.ts":
/*!*************************************************************!*\
  !*** ./src/modules/subscription/dto/subscription.mapper.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubscriptionMapper = void 0;
const subscription_entity_1 = __webpack_require__(/*! ../entities/subscription.entity */ "./src/modules/subscription/entities/subscription.entity.ts");
const subscription_dto_1 = __webpack_require__(/*! ./subscription.dto */ "./src/modules/subscription/dto/subscription.dto.ts");
class SubscriptionMapper {
    static toInterface(entity) {
        return new subscription_dto_1.SubscriptionDto(entity.props);
    }
    toInterface(entity) {
        return SubscriptionMapper.toInterface(entity);
    }
    static toDomain(model) {
        return new subscription_entity_1.Subscription({
            ...model,
        });
    }
    toDomain(model) {
        return SubscriptionMapper.toDomain(model);
    }
    static toPersistence(entity) {
        return {
            ...entity.props,
        };
    }
    toPersistence(entity) {
        return SubscriptionMapper.toPersistence(entity);
    }
}
exports.SubscriptionMapper = SubscriptionMapper;


/***/ }),

/***/ "./src/modules/subscription/dto/update-subscription.dto.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/subscription/dto/update-subscription.dto.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSubscriptionDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_subscription_dto_1 = __webpack_require__(/*! ./create-subscription.dto */ "./src/modules/subscription/dto/create-subscription.dto.ts");
class UpdateSubscriptionDto extends (0, mapped_types_1.PartialType)(create_subscription_dto_1.CreateSubscriptionDto) {
}
exports.UpdateSubscriptionDto = UpdateSubscriptionDto;


/***/ }),

/***/ "./src/modules/subscription/entities/subscription.entity.ts":
/*!******************************************************************!*\
  !*** ./src/modules/subscription/entities/subscription.entity.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Subscription = void 0;
class Subscription {
    props;
    constructor(props) {
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
            updatedAt: props.updatedAt ?? new Date(),
        };
    }
    get id() {
        return this.props.id;
    }
    get accountId() {
        return this.props.accountId;
    }
    get appId() {
        return this.props.appId;
    }
    get expression() {
        return this.props.expression;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    get deletedAt() {
        return this.props.deletedAt;
    }
    get createdBy() {
        return this.props.createdBy;
    }
    get updatedBy() {
        return this.props.updatedBy;
    }
    get deletedBy() {
        return this.props.deletedBy;
    }
    updateExpression(expression) {
        this.props.expression = expression;
        this.touch();
    }
    softDelete(byUserId) {
        this.props.deletedAt = new Date();
        if (byUserId) {
            this.props.deletedBy = byUserId;
        }
        this.touch();
    }
    updateOwner(id) {
        this.props.createdBy = id;
        this.touch();
    }
    updateUpdatedBy(id) {
        this.props.updatedBy = id;
        this.touch();
    }
    restore() {
        this.props.deletedAt = undefined;
        this.props.deletedBy = undefined;
        this.touch();
    }
    touch(id) {
        this.props.updatedAt = new Date();
        if (id) {
            this.props.updatedBy = id;
        }
    }
}
exports.Subscription = Subscription;


/***/ }),

/***/ "./src/modules/subscription/entities/subscription.model.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/subscription/entities/subscription.model.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Subscription = void 0;
const account_model_1 = __webpack_require__(/*! src/modules/account/entities/account.model */ "./src/modules/account/entities/account.model.ts");
const app_model_1 = __webpack_require__(/*! src/modules/app/entities/app.model */ "./src/modules/app/entities/app.model.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Subscription = class Subscription {
    id;
    accountId;
    account;
    appId;
    app;
    expression;
    createdAt;
    updatedAt;
    deletedAt;
    createdBy;
    updatedBy;
    deletedBy;
};
exports.Subscription = Subscription;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Subscription.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Subscription.prototype, "accountId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => account_model_1.Account, (relation) => relation.subscriptions, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'accountId' }),
    __metadata("design:type", typeof (_a = typeof account_model_1.Account !== "undefined" && account_model_1.Account) === "function" ? _a : Object)
], Subscription.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Subscription.prototype, "appId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => app_model_1.App, (relation) => relation.subscriptions, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'appId' }),
    __metadata("design:type", typeof (_b = typeof app_model_1.App !== "undefined" && app_model_1.App) === "function" ? _b : Object)
], Subscription.prototype, "app", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Subscription.prototype, "expression", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Subscription.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Subscription.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Subscription.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Subscription.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Subscription.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Subscription.prototype, "deletedBy", void 0);
exports.Subscription = Subscription = __decorate([
    (0, typeorm_1.Entity)('subscriptions')
], Subscription);


/***/ }),

/***/ "./src/modules/subscription/handlers/subscription-created.handler.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/subscription/handlers/subscription-created.handler.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubscriptionCreatedHandler = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const subscription_created_command_1 = __webpack_require__(/*! ../commands/subscription-created.command */ "./src/modules/subscription/commands/subscription-created.command.ts");
let SubscriptionCreatedHandler = class SubscriptionCreatedHandler {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.debug('Subscription created handler called', {
            correlationId: '8adf5d96-ec23-45bc-abf4-3d650c30a76a',
            command: JSON.stringify(command),
        });
        await new Promise((res) => res(true));
        return {
            actionId: crypto.randomUUID(),
        };
    }
};
exports.SubscriptionCreatedHandler = SubscriptionCreatedHandler;
exports.SubscriptionCreatedHandler = SubscriptionCreatedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(subscription_created_command_1.SubscriptionCreatedCommand),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object])
], SubscriptionCreatedHandler);


/***/ }),

/***/ "./src/modules/subscription/handlers/subscription-removed.handler.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/subscription/handlers/subscription-removed.handler.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubscriptionRemovedHandler = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const subscription_removed_command_1 = __webpack_require__(/*! ../commands/subscription-removed.command */ "./src/modules/subscription/commands/subscription-removed.command.ts");
let SubscriptionRemovedHandler = class SubscriptionRemovedHandler {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.debug('Subscription removed handler called', {
            correlationId: '4954e2c3-42c3-4aaf-b9ae-365f15d83ef6',
            command: JSON.stringify(command),
        });
        await new Promise((res) => res(true));
        return {
            actionId: crypto.randomUUID(),
        };
    }
};
exports.SubscriptionRemovedHandler = SubscriptionRemovedHandler;
exports.SubscriptionRemovedHandler = SubscriptionRemovedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(subscription_removed_command_1.SubscriptionRemovedCommand),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object])
], SubscriptionRemovedHandler);


/***/ }),

/***/ "./src/modules/subscription/handlers/subscription-updated.handler.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/subscription/handlers/subscription-updated.handler.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubscriptionUpdatedHandler = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const subscription_updated_command_1 = __webpack_require__(/*! ../commands/subscription-updated.command */ "./src/modules/subscription/commands/subscription-updated.command.ts");
let SubscriptionUpdatedHandler = class SubscriptionUpdatedHandler {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.debug('Subscription updated handler called', {
            correlationId: '67a859be-a168-4574-bbc3-c05b27dc4612',
            command: JSON.stringify(command),
        });
        await new Promise((res) => res(true));
        return {
            actionId: crypto.randomUUID(),
        };
    }
};
exports.SubscriptionUpdatedHandler = SubscriptionUpdatedHandler;
exports.SubscriptionUpdatedHandler = SubscriptionUpdatedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(subscription_updated_command_1.SubscriptionUpdatedCommand),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object])
], SubscriptionUpdatedHandler);


/***/ }),

/***/ "./src/modules/subscription/subscription.controller.ts":
/*!*************************************************************!*\
  !*** ./src/modules/subscription/subscription.controller.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubscriptionController = void 0;
const dtos_1 = __webpack_require__(/*! @app/dtos */ "./libs/dtos/src/index.ts");
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! src/guards/jwt-auth.guard */ "./src/guards/jwt-auth.guard.ts");
const policies_guard_1 = __webpack_require__(/*! src/guards/policies.guard */ "./src/guards/policies.guard.ts");
const logging_cache_interceptor_1 = __webpack_require__(/*! src/interceptors/logging-cache.interceptor */ "./src/interceptors/logging-cache.interceptor.ts");
const casl_ability_factory_1 = __webpack_require__(/*! ../casl/casl-ability.factory/casl-ability.factory */ "./src/modules/casl/casl-ability.factory/casl-ability.factory.ts");
const subscription_created_command_1 = __webpack_require__(/*! ./commands/subscription-created.command */ "./src/modules/subscription/commands/subscription-created.command.ts");
const create_subscription_dto_1 = __webpack_require__(/*! ./dto/create-subscription.dto */ "./src/modules/subscription/dto/create-subscription.dto.ts");
const update_subscription_dto_1 = __webpack_require__(/*! ./dto/update-subscription.dto */ "./src/modules/subscription/dto/update-subscription.dto.ts");
const subscription_mapper_1 = __webpack_require__(/*! ./dto/subscription.mapper */ "./src/modules/subscription/dto/subscription.mapper.ts");
const subscription_entity_1 = __webpack_require__(/*! ./entities/subscription.entity */ "./src/modules/subscription/entities/subscription.entity.ts");
const subscription_service_1 = __webpack_require__(/*! ./subscription.service */ "./src/modules/subscription/subscription.service.ts");
const subscription_updated_command_1 = __webpack_require__(/*! ./commands/subscription-updated.command */ "./src/modules/subscription/commands/subscription-updated.command.ts");
const subscription_removed_command_1 = __webpack_require__(/*! ./commands/subscription-removed.command */ "./src/modules/subscription/commands/subscription-removed.command.ts");
let SubscriptionController = class SubscriptionController {
    logger;
    service;
    mapper;
    caslAbilityFactory;
    commandBus;
    constructor(logger, service, mapper, caslAbilityFactory, commandBus) {
        this.logger = logger;
        this.service = service;
        this.mapper = mapper;
        this.caslAbilityFactory = caslAbilityFactory;
        this.commandBus = commandBus;
    }
    async create(createSubscriptionDto, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        if (!ability.can(casl_ability_factory_1.Action.Create, subscription_entity_1.Subscription)) {
            throw new common_1.UnauthorizedException();
        }
        const result = await this.service.create(createSubscriptionDto, req.user.id);
        void this.commandBus.execute(new subscription_created_command_1.SubscriptionCreatedCommand(result));
        return this.mapper.toInterface(result);
    }
    async findAll(skip = 0, take = 100, req) {
        const result = await this.service.findAll(skip, take, {
            accountId: req.user.accountId,
        });
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        return {
            ...result,
            data: result.data
                .filter((entity) => ability.can(casl_ability_factory_1.Action.Read, entity))
                .map((entity) => this.mapper.toInterface(entity)),
        };
    }
    async findOne(id, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        const app = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Read, app)) {
            throw new common_1.UnauthorizedException();
        }
        return this.mapper.toInterface(app);
    }
    async update(id, updateSubscriptionDto, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        const app = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Update, app)) {
            throw new common_1.UnauthorizedException();
        }
        const updated = await this.service.update(id, updateSubscriptionDto, req.user.id);
        void this.commandBus.execute(new subscription_updated_command_1.SubscriptionUpdatedCommand(updated));
        return this.mapper.toInterface(updated);
    }
    async remove(id, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        const entity = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Delete, entity)) {
            throw new common_1.UnauthorizedException();
        }
        await this.service.remove(id, req.user.id);
        void this.commandBus.execute(new subscription_removed_command_1.SubscriptionRemovedCommand(entity));
        return entity.id;
    }
};
exports.SubscriptionController = SubscriptionController;
__decorate([
    (0, common_1.Post)(),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Create, subscription_entity_1.Subscription)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof create_subscription_dto_1.CreateSubscriptionDto !== "undefined" && create_subscription_dto_1.CreateSubscriptionDto) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Read, subscription_entity_1.Subscription)),
    (0, swagger_1.ApiQuery)({ name: 'skip', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'take', required: false, type: Number }),
    (0, swagger_1.ApiOkResponse)({ type: dtos_1.FindAllResponseDto }),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], SubscriptionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Read, subscription_entity_1.Subscription)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Update, subscription_entity_1.Subscription)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_h = typeof update_subscription_dto_1.UpdateSubscriptionDto !== "undefined" && update_subscription_dto_1.UpdateSubscriptionDto) === "function" ? _h : Object, Object]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Delete, subscription_entity_1.Subscription)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "remove", null);
exports.SubscriptionController = SubscriptionController = __decorate([
    (0, common_1.Controller)({ path: 'subscriptions', version: '1' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, policies_guard_1.PoliciesGuard),
    (0, common_1.UseInterceptors)(logging_cache_interceptor_1.ControllerCacheInterceptor, common_1.ClassSerializerInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, common_1.Inject)(subscription_service_1.SubscriptionService)),
    __param(2, (0, common_1.Inject)(subscription_mapper_1.SubscriptionMapper)),
    __param(3, (0, common_1.Inject)(casl_ability_factory_1.CaslAbilityFactory)),
    __param(4, (0, common_1.Inject)(cqrs_1.CommandBus)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof subscription_service_1.SubscriptionService !== "undefined" && subscription_service_1.SubscriptionService) === "function" ? _b : Object, typeof (_c = typeof subscription_mapper_1.SubscriptionMapper !== "undefined" && subscription_mapper_1.SubscriptionMapper) === "function" ? _c : Object, typeof (_d = typeof casl_ability_factory_1.CaslAbilityFactory !== "undefined" && casl_ability_factory_1.CaslAbilityFactory) === "function" ? _d : Object, typeof (_e = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _e : Object])
], SubscriptionController);


/***/ }),

/***/ "./src/modules/subscription/subscription.module.ts":
/*!*********************************************************!*\
  !*** ./src/modules/subscription/subscription.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubscriptionModule = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const casl_module_1 = __webpack_require__(/*! ../casl/casl.module */ "./src/modules/casl/casl.module.ts");
const user_model_1 = __webpack_require__(/*! ../user/entities/user.model */ "./src/modules/user/entities/user.model.ts");
const subscription_mapper_1 = __webpack_require__(/*! ./dto/subscription.mapper */ "./src/modules/subscription/dto/subscription.mapper.ts");
const subscription_model_1 = __webpack_require__(/*! ./entities/subscription.model */ "./src/modules/subscription/entities/subscription.model.ts");
const subscription_created_handler_1 = __webpack_require__(/*! ./handlers/subscription-created.handler */ "./src/modules/subscription/handlers/subscription-created.handler.ts");
const subscription_removed_handler_1 = __webpack_require__(/*! ./handlers/subscription-removed.handler */ "./src/modules/subscription/handlers/subscription-removed.handler.ts");
const subscription_updated_handler_1 = __webpack_require__(/*! ./handlers/subscription-updated.handler */ "./src/modules/subscription/handlers/subscription-updated.handler.ts");
const subscription_controller_1 = __webpack_require__(/*! ./subscription.controller */ "./src/modules/subscription/subscription.controller.ts");
const subscription_service_1 = __webpack_require__(/*! ./subscription.service */ "./src/modules/subscription/subscription.service.ts");
let SubscriptionModule = class SubscriptionModule {
};
exports.SubscriptionModule = SubscriptionModule;
exports.SubscriptionModule = SubscriptionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            logging_1.LoggingModule,
            typeorm_1.TypeOrmModule.forFeature([user_model_1.User, subscription_model_1.Subscription]),
            casl_module_1.CaslModule,
        ],
        controllers: [subscription_controller_1.SubscriptionController],
        providers: [
            subscription_mapper_1.SubscriptionMapper,
            subscription_service_1.SubscriptionService,
            subscription_created_handler_1.SubscriptionCreatedHandler,
            subscription_updated_handler_1.SubscriptionUpdatedHandler,
            subscription_removed_handler_1.SubscriptionRemovedHandler,
        ],
        exports: [subscription_service_1.SubscriptionService],
    })
], SubscriptionModule);


/***/ }),

/***/ "./src/modules/subscription/subscription.service.ts":
/*!**********************************************************!*\
  !*** ./src/modules/subscription/subscription.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubscriptionService = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const subscription_mapper_1 = __webpack_require__(/*! ./dto/subscription.mapper */ "./src/modules/subscription/dto/subscription.mapper.ts");
const subscription_model_1 = __webpack_require__(/*! ./entities/subscription.model */ "./src/modules/subscription/entities/subscription.model.ts");
let SubscriptionService = class SubscriptionService {
    logger;
    repo;
    mapper;
    constructor(logger, repo, mapper) {
        this.logger = logger;
        this.repo = repo;
        this.mapper = mapper;
    }
    async createWithManager(createSubscriptionDto, manager) {
        const repo = manager.getRepository(subscription_model_1.Subscription);
        const entity = repo.create({ ...createSubscriptionDto });
        const result = await repo.save(entity);
        return this.mapper.toDomain(result);
    }
    async create(createSubscriptionDto, createdBy) {
        const entity = this.repo.create({ ...createSubscriptionDto, createdBy });
        const result = await this.repo.save(entity);
        return this.mapper.toDomain(result);
    }
    async findAll(skip = 0, take = 100, where) {
        try {
            const [entities, count] = await this.repo.findAndCount({
                skip,
                take,
                where,
            });
            return {
                data: entities.map((entity) => this.mapper.toDomain(entity)),
                pagination: {
                    total: count,
                    skip,
                    take,
                    hasNextPage: skip + take < count,
                },
            };
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.findAll.name} encountered an error`, {
                correlationId: '6d437955-6b3a-417d-825b-3f43dedd8825',
                err: JSON.stringify(err),
            });
            return {
                data: [],
                pagination: { total: 0, skip: 0, take, hasNextPage: false },
            };
        }
    }
    async findOne(id) {
        try {
            const entity = await this.repo.findOneBy({ id });
            if (!entity) {
                throw new common_1.NotFoundException();
            }
            return this.mapper.toDomain(entity);
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.findOne.name} encountered an error`, {
                correlationId: '6acb4b57-7592-4f08-869c-b4a14cddd072',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async findOneByExpression(expression, accountId) {
        try {
            const model = await this.repo.findOneBy({ expression, accountId });
            if (!model) {
                throw new common_1.NotFoundException();
            }
            return this.mapper.toDomain(model);
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.findOneByExpression.name} encountered an error`, {
                correlationId: '7cce84d8-8f89-4058-8d2e-af450cfad2d3',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async updateWithManager(id, updateSubscriptionDto, manager) {
        try {
            const repo = manager.getRepository(subscription_model_1.Subscription);
            const model = await repo.findOneBy({ id });
            if (!model) {
                throw new common_1.NotFoundException();
            }
            const entity = this.mapper.toDomain(model);
            if (updateSubscriptionDto.expression) {
                entity.updateExpression(updateSubscriptionDto.expression);
            }
            if (updateSubscriptionDto.createdBy) {
                entity.updateOwner(updateSubscriptionDto.createdBy);
            }
            if (updateSubscriptionDto.updatedBy) {
                entity.updateUpdatedBy(updateSubscriptionDto.updatedBy);
            }
            await repo.update(entity.id, this.mapper.toPersistence(entity));
            return entity;
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.updateWithManager.name} encountered an error`, {
                correlationId: '6befde88-ff55-4a59-9c7b-8b47a5980dd4',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async update(id, updateSubscriptionDto, updatedBy) {
        try {
            const entity = await this.findOne(id);
            if (updateSubscriptionDto.expression) {
                entity.updateExpression(updateSubscriptionDto.expression);
            }
            entity.updateUpdatedBy(updatedBy);
            await this.repo.update(entity.id, this.mapper.toPersistence(entity));
            return entity;
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.update.name} encountered an error`, {
                correlationId: '6befde88-ff55-4a59-9c7b-8b47a5980dd4',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async remove(id, removedBy) {
        try {
            const entity = await this.findOne(id);
            entity.softDelete(removedBy);
            await this.repo.update(entity.id, this.mapper.toPersistence(entity));
            return entity;
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.remove.name} encountered an error`, {
                correlationId: 'b76287ba-c244-475f-adcb-52c6917ba739',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
};
exports.SubscriptionService = SubscriptionService;
exports.SubscriptionService = SubscriptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, typeorm_1.InjectRepository)(subscription_model_1.Subscription)),
    __param(2, (0, common_1.Inject)(subscription_mapper_1.SubscriptionMapper)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof subscription_mapper_1.SubscriptionMapper !== "undefined" && subscription_mapper_1.SubscriptionMapper) === "function" ? _c : Object])
], SubscriptionService);


/***/ }),

/***/ "./src/modules/user/commands/user-created.command.ts":
/*!***********************************************************!*\
  !*** ./src/modules/user/commands/user-created.command.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserCreatedCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
class UserCreatedCommand extends cqrs_1.Command {
    entity;
    constructor(entity) {
        super();
        this.entity = entity;
    }
}
exports.UserCreatedCommand = UserCreatedCommand;


/***/ }),

/***/ "./src/modules/user/commands/user-removed.command.ts":
/*!***********************************************************!*\
  !*** ./src/modules/user/commands/user-removed.command.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRemovedCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
class UserRemovedCommand extends cqrs_1.Command {
    entity;
    constructor(entity) {
        super();
        this.entity = entity;
    }
}
exports.UserRemovedCommand = UserRemovedCommand;


/***/ }),

/***/ "./src/modules/user/commands/user-updated.command.ts":
/*!***********************************************************!*\
  !*** ./src/modules/user/commands/user-updated.command.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserUpdatedCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
class UserUpdatedCommand extends cqrs_1.Command {
    entity;
    constructor(entity) {
        super();
        this.entity = entity;
    }
}
exports.UserUpdatedCommand = UserUpdatedCommand;


/***/ }),

/***/ "./src/modules/user/dto/create-user.dto.ts":
/*!*************************************************!*\
  !*** ./src/modules/user/dto/create-user.dto.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./src/modules/user/entities/user.entity.ts");
class CreateUserDto {
    accountId;
    departmentId;
    email;
    password;
    name;
    refresh_token;
    role;
    createdBy;
    updatedBy;
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The id of the account' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The id of the department' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "departmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The email address of the user' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The password of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.IsStrongPassword)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "refresh_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The role of the user' }),
    (0, class_validator_1.IsEnum)(user_entity_1.Role),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof user_entity_1.Role !== "undefined" && user_entity_1.Role) === "function" ? _a : Object)
], CreateUserDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "updatedBy", void 0);


/***/ }),

/***/ "./src/modules/user/dto/update-user.dto.ts":
/*!*************************************************!*\
  !*** ./src/modules/user/dto/update-user.dto.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_user_dto_1 = __webpack_require__(/*! ./create-user.dto */ "./src/modules/user/dto/create-user.dto.ts");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(create_user_dto_1.CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;


/***/ }),

/***/ "./src/modules/user/dto/user.dto.ts":
/*!******************************************!*\
  !*** ./src/modules/user/dto/user.dto.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./src/modules/user/entities/user.entity.ts");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class UserDto {
    constructor(partial) {
        Object.assign(this, partial);
    }
    accountId;
    email;
    password;
    name;
    refresh_token;
    role;
    createdBy;
    updatedBy;
    deletedBy;
    createdAt;
    updatedAt;
    deletedAt;
}
exports.UserDto = UserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The id of the account' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UserDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The email address of the user' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The password of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.IsStrongPassword)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserDto.prototype, "refresh_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The role of the user' }),
    (0, class_validator_1.IsEnum)(user_entity_1.Role),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof user_entity_1.Role !== "undefined" && user_entity_1.Role) === "function" ? _a : Object)
], UserDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserDto.prototype, "updatedBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserDto.prototype, "deletedBy", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UserDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], UserDto.prototype, "deletedAt", void 0);


/***/ }),

/***/ "./src/modules/user/dto/user.mapper.ts":
/*!*********************************************!*\
  !*** ./src/modules/user/dto/user.mapper.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserMapper = void 0;
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./src/modules/user/entities/user.entity.ts");
const user_dto_1 = __webpack_require__(/*! ./user.dto */ "./src/modules/user/dto/user.dto.ts");
class UserMapper {
    static toInterface(user) {
        return new user_dto_1.UserDto(user.props);
    }
    toInterface(user) {
        return UserMapper.toInterface(user);
    }
    static toDomain(user) {
        return new user_entity_1.User({
            ...user,
        });
    }
    toDomain(user) {
        return UserMapper.toDomain(user);
    }
    static toPersistence(user) {
        return {
            ...user.props,
        };
    }
    toPersistence(user) {
        return UserMapper.toPersistence(user);
    }
}
exports.UserMapper = UserMapper;


/***/ }),

/***/ "./src/modules/user/entities/user.entity.ts":
/*!**************************************************!*\
  !*** ./src/modules/user/entities/user.entity.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = exports.Role = void 0;
var Role;
(function (Role) {
    Role["User"] = "user";
    Role["Admin"] = "admin";
    Role["Owner"] = "owner";
})(Role || (exports.Role = Role = {}));
class User {
    props;
    constructor(props) {
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
            updatedAt: props.updatedAt ?? new Date(),
        };
    }
    get id() {
        return this.props.id;
    }
    get accountId() {
        return this.props.accountId;
    }
    get departmentId() {
        return this.props.departmentId;
    }
    get email() {
        return this.props.email;
    }
    get password() {
        return this.props.password;
    }
    get role() {
        return this.props.role;
    }
    get name() {
        return this.props.name;
    }
    get refreshToken() {
        return this.props.refresh_token;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    get deletedAt() {
        return this.props.deletedAt;
    }
    get createdBy() {
        return this.props.createdBy;
    }
    get updatedBy() {
        return this.props.updatedBy;
    }
    get deletedBy() {
        return this.props.deletedBy;
    }
    updateName(newName) {
        this.props.name = newName;
        this.touch();
    }
    updateEmail(newEmail) {
        this.props.email = newEmail;
        this.touch();
    }
    updateRefreshToken(newRefreshToken) {
        this.props.refresh_token = newRefreshToken;
        this.touch();
    }
    updateRole(newRole) {
        this.props.role = newRole;
        this.touch();
    }
    updatePassword(newPassword) {
        this.props.password = newPassword;
        this.touch();
    }
    updateDepartment(departmentId) {
        this.props.departmentId = departmentId;
        this.touch();
    }
    softDelete(byUserId) {
        this.props.deletedAt = new Date();
        if (byUserId) {
            this.props.deletedBy = byUserId;
        }
        this.touch();
    }
    updateOwner(id) {
        this.props.createdBy = id;
        this.touch();
    }
    updateUpdatedBy(id) {
        this.props.updatedBy = id;
        this.touch();
    }
    restore() {
        this.props.deletedAt = undefined;
        this.props.deletedBy = undefined;
        this.touch();
    }
    touch(id) {
        this.props.updatedAt = new Date();
        if (id) {
            this.props.updatedBy = id;
        }
    }
}
exports.User = User;


/***/ }),

/***/ "./src/modules/user/entities/user.model.ts":
/*!*************************************************!*\
  !*** ./src/modules/user/entities/user.model.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const account_model_1 = __webpack_require__(/*! src/modules/account/entities/account.model */ "./src/modules/account/entities/account.model.ts");
const department_model_1 = __webpack_require__(/*! src/modules/department/entities/department.model */ "./src/modules/department/entities/department.model.ts");
const workspace_user_model_1 = __webpack_require__(/*! src/modules/workspace/entities/workspace-user.model */ "./src/modules/workspace/entities/workspace-user.model.ts");
const workspace_model_1 = __webpack_require__(/*! src/modules/workspace/entities/workspace.model */ "./src/modules/workspace/entities/workspace.model.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./src/modules/user/entities/user.entity.ts");
let User = class User {
    id;
    accountId;
    account;
    workspaceUsers;
    workspaces;
    departmentId;
    department;
    email;
    password;
    role;
    name;
    refresh_token;
    createdAt;
    updatedAt;
    deletedAt;
    createdBy;
    updatedBy;
    deletedBy;
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "accountId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => account_model_1.Account, (account) => account.users, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'accountId' }),
    __metadata("design:type", typeof (_a = typeof account_model_1.Account !== "undefined" && account_model_1.Account) === "function" ? _a : Object)
], User.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => workspace_user_model_1.WorkspaceUser, (wu) => wu.user),
    __metadata("design:type", Array)
], User.prototype, "workspaceUsers", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => workspace_model_1.Workspace, (workspace) => workspace.users),
    (0, typeorm_1.JoinTable)({
        name: 'workspace_users',
        joinColumn: { name: 'userId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'workspaceId', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], User.prototype, "workspaces", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "departmentId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => department_model_1.Department, (relation) => relation.users, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'departmentId' }),
    __metadata("design:type", typeof (_b = typeof department_model_1.Department !== "undefined" && department_model_1.Department) === "function" ? _b : Object)
], User.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: user_entity_1.Role, default: user_entity_1.Role.User }),
    __metadata("design:type", typeof (_c = typeof user_entity_1.Role !== "undefined" && user_entity_1.Role) === "function" ? _c : Object)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "refresh_token", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], User.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "deletedBy", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);


/***/ }),

/***/ "./src/modules/user/handlers/user-created.handler.ts":
/*!***********************************************************!*\
  !*** ./src/modules/user/handlers/user-created.handler.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserCreatedHandler = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const user_created_command_1 = __webpack_require__(/*! ../commands/user-created.command */ "./src/modules/user/commands/user-created.command.ts");
let UserCreatedHandler = class UserCreatedHandler {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.debug('User created handler called', {
            correlationId: '23b10edb-86ee-45fe-ba6c-43ff8200c57f',
            command: JSON.stringify(command),
        });
        await new Promise((res) => res(true));
        return {
            actionId: crypto.randomUUID(),
        };
    }
};
exports.UserCreatedHandler = UserCreatedHandler;
exports.UserCreatedHandler = UserCreatedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(user_created_command_1.UserCreatedCommand),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object])
], UserCreatedHandler);


/***/ }),

/***/ "./src/modules/user/handlers/user-removed.handler.ts":
/*!***********************************************************!*\
  !*** ./src/modules/user/handlers/user-removed.handler.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRemovedHandler = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const user_removed_command_1 = __webpack_require__(/*! ../commands/user-removed.command */ "./src/modules/user/commands/user-removed.command.ts");
let UserRemovedHandler = class UserRemovedHandler {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.debug('User removed handler called', {
            correlationId: '020bea7d-6b78-46f9-a247-b792b5b16621',
            command: JSON.stringify(command),
        });
        await new Promise((res) => res(true));
        return {
            actionId: crypto.randomUUID(),
        };
    }
};
exports.UserRemovedHandler = UserRemovedHandler;
exports.UserRemovedHandler = UserRemovedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(user_removed_command_1.UserRemovedCommand),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object])
], UserRemovedHandler);


/***/ }),

/***/ "./src/modules/user/handlers/user-updated.handler.ts":
/*!***********************************************************!*\
  !*** ./src/modules/user/handlers/user-updated.handler.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserUpdatedHandler = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const user_updated_command_1 = __webpack_require__(/*! ../commands/user-updated.command */ "./src/modules/user/commands/user-updated.command.ts");
let UserUpdatedHandler = class UserUpdatedHandler {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.debug('User updated handler called', {
            correlationId: '3a5bd5b9-bb97-41b4-aa3e-d7d7e8cd88eb',
            command: JSON.stringify(command),
        });
        await new Promise((res) => res(true));
        return {
            actionId: crypto.randomUUID(),
        };
    }
};
exports.UserUpdatedHandler = UserUpdatedHandler;
exports.UserUpdatedHandler = UserUpdatedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(user_updated_command_1.UserUpdatedCommand),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object])
], UserUpdatedHandler);


/***/ }),

/***/ "./src/modules/user/user.controller.ts":
/*!*********************************************!*\
  !*** ./src/modules/user/user.controller.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const dtos_1 = __webpack_require__(/*! @app/dtos */ "./libs/dtos/src/index.ts");
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! src/guards/jwt-auth.guard */ "./src/guards/jwt-auth.guard.ts");
const policies_guard_1 = __webpack_require__(/*! src/guards/policies.guard */ "./src/guards/policies.guard.ts");
const logging_cache_interceptor_1 = __webpack_require__(/*! src/interceptors/logging-cache.interceptor */ "./src/interceptors/logging-cache.interceptor.ts");
const casl_ability_factory_1 = __webpack_require__(/*! ../casl/casl-ability.factory/casl-ability.factory */ "./src/modules/casl/casl-ability.factory/casl-ability.factory.ts");
const user_created_command_1 = __webpack_require__(/*! ./commands/user-created.command */ "./src/modules/user/commands/user-created.command.ts");
const create_user_dto_1 = __webpack_require__(/*! ./dto/create-user.dto */ "./src/modules/user/dto/create-user.dto.ts");
const update_user_dto_1 = __webpack_require__(/*! ./dto/update-user.dto */ "./src/modules/user/dto/update-user.dto.ts");
const user_mapper_1 = __webpack_require__(/*! ./dto/user.mapper */ "./src/modules/user/dto/user.mapper.ts");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./src/modules/user/entities/user.entity.ts");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./src/modules/user/user.service.ts");
const user_updated_command_1 = __webpack_require__(/*! ./commands/user-updated.command */ "./src/modules/user/commands/user-updated.command.ts");
const user_removed_command_1 = __webpack_require__(/*! ./commands/user-removed.command */ "./src/modules/user/commands/user-removed.command.ts");
let UserController = class UserController {
    logger;
    service;
    mapper;
    caslAbilityFactory;
    commandBus;
    constructor(logger, service, mapper, caslAbilityFactory, commandBus) {
        this.logger = logger;
        this.service = service;
        this.mapper = mapper;
        this.caslAbilityFactory = caslAbilityFactory;
        this.commandBus = commandBus;
    }
    async create(createUserDto, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        if (!ability.can(casl_ability_factory_1.Action.Create, user_entity_1.User)) {
            throw new common_1.UnauthorizedException();
        }
        const result = await this.service.create(createUserDto, req.user.id);
        void this.commandBus.execute(new user_created_command_1.UserCreatedCommand(result));
        return this.mapper.toInterface(result);
    }
    async findAll(skip = 0, take = 100, req) {
        const result = await this.service.findAll(skip, take);
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        return {
            ...result,
            data: result.data
                .filter((entity) => ability.can(casl_ability_factory_1.Action.Read, entity))
                .map((entity) => this.mapper.toInterface(entity)),
        };
    }
    async findOne(id, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        const user = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Read, user)) {
            throw new common_1.UnauthorizedException();
        }
        return this.mapper.toInterface(user);
    }
    async update(id, updateUserDto, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        const user = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Update, user)) {
            throw new common_1.UnauthorizedException();
        }
        const updated = await this.service.update(id, updateUserDto, req.user.id);
        void this.commandBus.execute(new user_updated_command_1.UserUpdatedCommand(updated));
        return this.mapper.toInterface(updated);
    }
    async remove(id, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        const user = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Delete, user)) {
            throw new common_1.UnauthorizedException();
        }
        await this.service.remove(id, req.user.id);
        void this.commandBus.execute(new user_removed_command_1.UserRemovedCommand(user));
        return user.id;
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Create, user_entity_1.User)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Read, user_entity_1.User)),
    (0, swagger_1.ApiQuery)({ name: 'skip', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'take', required: false, type: Number }),
    (0, swagger_1.ApiOkResponse)({ type: dtos_1.FindAllResponseDto }),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Read, user_entity_1.User)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Update, user_entity_1.User)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_h = typeof update_user_dto_1.UpdateUserDto !== "undefined" && update_user_dto_1.UpdateUserDto) === "function" ? _h : Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Delete, user_entity_1.User)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)({ path: 'users', version: '1' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, policies_guard_1.PoliciesGuard),
    (0, common_1.UseInterceptors)(logging_cache_interceptor_1.ControllerCacheInterceptor, common_1.ClassSerializerInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, common_1.Inject)(user_service_1.UserService)),
    __param(2, (0, common_1.Inject)(user_mapper_1.UserMapper)),
    __param(3, (0, common_1.Inject)(casl_ability_factory_1.CaslAbilityFactory)),
    __param(4, (0, common_1.Inject)(cqrs_1.CommandBus)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _b : Object, typeof (_c = typeof user_mapper_1.UserMapper !== "undefined" && user_mapper_1.UserMapper) === "function" ? _c : Object, typeof (_d = typeof casl_ability_factory_1.CaslAbilityFactory !== "undefined" && casl_ability_factory_1.CaslAbilityFactory) === "function" ? _d : Object, typeof (_e = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _e : Object])
], UserController);


/***/ }),

/***/ "./src/modules/user/user.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/user/user.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_mapper_1 = __webpack_require__(/*! ./dto/user.mapper */ "./src/modules/user/dto/user.mapper.ts");
const user_model_1 = __webpack_require__(/*! ./entities/user.model */ "./src/modules/user/entities/user.model.ts");
const user_created_handler_1 = __webpack_require__(/*! ./handlers/user-created.handler */ "./src/modules/user/handlers/user-created.handler.ts");
const user_removed_handler_1 = __webpack_require__(/*! ./handlers/user-removed.handler */ "./src/modules/user/handlers/user-removed.handler.ts");
const user_updated_handler_1 = __webpack_require__(/*! ./handlers/user-updated.handler */ "./src/modules/user/handlers/user-updated.handler.ts");
const user_controller_1 = __webpack_require__(/*! ./user.controller */ "./src/modules/user/user.controller.ts");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./src/modules/user/user.service.ts");
const casl_module_1 = __webpack_require__(/*! ../casl/casl.module */ "./src/modules/casl/casl.module.ts");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [logging_1.LoggingModule, typeorm_1.TypeOrmModule.forFeature([user_model_1.User]), casl_module_1.CaslModule],
        controllers: [user_controller_1.UserController],
        providers: [
            user_mapper_1.UserMapper,
            user_service_1.UserService,
            user_created_handler_1.UserCreatedHandler,
            user_updated_handler_1.UserUpdatedHandler,
            user_removed_handler_1.UserRemovedHandler,
        ],
        exports: [user_service_1.UserService],
    })
], UserModule);


/***/ }),

/***/ "./src/modules/user/user.service.ts":
/*!******************************************!*\
  !*** ./src/modules/user/user.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const user_mapper_1 = __webpack_require__(/*! ./dto/user.mapper */ "./src/modules/user/dto/user.mapper.ts");
const user_model_1 = __webpack_require__(/*! ./entities/user.model */ "./src/modules/user/entities/user.model.ts");
let UserService = class UserService {
    logger;
    repo;
    mapper;
    constructor(logger, repo, mapper) {
        this.logger = logger;
        this.repo = repo;
        this.mapper = mapper;
    }
    async createWithManager(createUserDto, manager) {
        const repo = manager.getRepository(user_model_1.User);
        const entity = repo.create({ ...createUserDto });
        const result = await repo.save(entity);
        return this.mapper.toDomain(result);
    }
    async create(createUserDto, createdBy) {
        const entity = this.repo.create({ ...createUserDto, createdBy });
        const result = await this.repo.save(entity);
        return this.mapper.toDomain(result);
    }
    async findAll(skip = 0, take = 100) {
        try {
            const [entities, count] = await this.repo.findAndCount({
                skip,
                take,
            });
            return {
                data: entities.map((entity) => this.mapper.toDomain(entity)),
                pagination: {
                    total: count,
                    skip,
                    take,
                    hasNextPage: skip + take < count,
                },
            };
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.findAll.name} encountered an error`, {
                correlationId: 'eb9e90e0-6394-484c-a431-6a79eb56468e',
                err: JSON.stringify(err),
            });
            return {
                data: [],
                pagination: { total: 0, skip: 0, take, hasNextPage: false },
            };
        }
    }
    async findOne(id) {
        try {
            const entity = await this.repo.findOneBy({ id });
            if (!entity) {
                throw new common_1.NotFoundException();
            }
            return this.mapper.toDomain(entity);
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.findOne.name} encountered an error`, {
                correlationId: '6befde88-ff55-4a59-9c7b-8b47a5980dd4',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async findOneByEmail(email) {
        try {
            const model = await this.repo.findOneBy({ email });
            if (!model) {
                throw new common_1.NotFoundException();
            }
            return this.mapper.toDomain(model);
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.findOneByEmail.name} encountered an error`, {
                correlationId: '6befde88-ff55-4a59-9c7b-8b47a5980dd4',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async updateWithManager(id, updateUserDto, manager) {
        try {
            const repo = manager.getRepository(user_model_1.User);
            const model = await repo.findOneBy({ id });
            if (!model) {
                throw new common_1.NotFoundException();
            }
            const entity = this.mapper.toDomain(model);
            if (updateUserDto.email) {
                entity.updateEmail(updateUserDto.email);
            }
            if (updateUserDto.refresh_token) {
                entity.updateRefreshToken(updateUserDto.refresh_token);
            }
            if (updateUserDto.role) {
                entity.updateRole(updateUserDto.role);
            }
            if (updateUserDto.name) {
                entity.updateName(updateUserDto.name);
            }
            if (updateUserDto.password) {
                entity.updatePassword(updateUserDto.password);
            }
            if (updateUserDto.createdBy) {
                entity.updateOwner(updateUserDto.createdBy);
            }
            if (updateUserDto.updatedBy) {
                entity.updateUpdatedBy(updateUserDto.updatedBy);
            }
            await repo.update(entity.id, this.mapper.toPersistence(entity));
            return entity;
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.updateWithManager.name} encountered an error`, {
                correlationId: '6befde88-ff55-4a59-9c7b-8b47a5980dd4',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async update(id, updateUserDto, updatedBy) {
        try {
            const entity = await this.findOne(id);
            if (updateUserDto.email) {
                entity.updateEmail(updateUserDto.email);
            }
            if (updateUserDto.refresh_token) {
                entity.updateRefreshToken(updateUserDto.refresh_token);
            }
            if (updateUserDto.role) {
                entity.updateRole(updateUserDto.role);
            }
            if (updateUserDto.name) {
                entity.updateName(updateUserDto.name);
            }
            if (updateUserDto.password) {
                entity.updatePassword(updateUserDto.password);
            }
            entity.updateUpdatedBy(updatedBy);
            await this.repo.update(entity.id, this.mapper.toPersistence(entity));
            return entity;
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.update.name} encountered an error`, {
                correlationId: '6befde88-ff55-4a59-9c7b-8b47a5980dd4',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async remove(id, removedBy) {
        try {
            const entity = await this.findOne(id);
            entity.softDelete(removedBy);
            await this.repo.update(entity.id, this.mapper.toPersistence(entity));
            return entity;
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.remove.name} encountered an error`, {
                correlationId: 'b76287ba-c244-475f-adcb-52c6917ba739',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, typeorm_1.InjectRepository)(user_model_1.User)),
    __param(2, (0, common_1.Inject)(user_mapper_1.UserMapper)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof user_mapper_1.UserMapper !== "undefined" && user_mapper_1.UserMapper) === "function" ? _c : Object])
], UserService);


/***/ }),

/***/ "./src/modules/workspace/commands/workspace-created.command.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/workspace/commands/workspace-created.command.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspaceCreatedCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
class WorkspaceCreatedCommand extends cqrs_1.Command {
    entity;
    constructor(entity) {
        super();
        this.entity = entity;
    }
}
exports.WorkspaceCreatedCommand = WorkspaceCreatedCommand;


/***/ }),

/***/ "./src/modules/workspace/commands/workspace-removed.command.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/workspace/commands/workspace-removed.command.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspaceRemovedCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
class WorkspaceRemovedCommand extends cqrs_1.Command {
    entity;
    constructor(entity) {
        super();
        this.entity = entity;
    }
}
exports.WorkspaceRemovedCommand = WorkspaceRemovedCommand;


/***/ }),

/***/ "./src/modules/workspace/commands/workspace-updated.command.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/workspace/commands/workspace-updated.command.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspaceUpdatedCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
class WorkspaceUpdatedCommand extends cqrs_1.Command {
    entity;
    constructor(entity) {
        super();
        this.entity = entity;
    }
}
exports.WorkspaceUpdatedCommand = WorkspaceUpdatedCommand;


/***/ }),

/***/ "./src/modules/workspace/dto/create-workspace.dto.ts":
/*!***********************************************************!*\
  !*** ./src/modules/workspace/dto/create-workspace.dto.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateWorkspaceDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateWorkspaceDto {
    accountId;
    name;
    createdBy;
    updatedBy;
}
exports.CreateWorkspaceDto = CreateWorkspaceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The id of the account' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateWorkspaceDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the workspace' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWorkspaceDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateWorkspaceDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateWorkspaceDto.prototype, "updatedBy", void 0);


/***/ }),

/***/ "./src/modules/workspace/dto/update-workspace.dto.ts":
/*!***********************************************************!*\
  !*** ./src/modules/workspace/dto/update-workspace.dto.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateWorkspaceDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_workspace_dto_1 = __webpack_require__(/*! ./create-workspace.dto */ "./src/modules/workspace/dto/create-workspace.dto.ts");
class UpdateWorkspaceDto extends (0, mapped_types_1.PartialType)(create_workspace_dto_1.CreateWorkspaceDto) {
}
exports.UpdateWorkspaceDto = UpdateWorkspaceDto;


/***/ }),

/***/ "./src/modules/workspace/dto/workspace.dto.ts":
/*!****************************************************!*\
  !*** ./src/modules/workspace/dto/workspace.dto.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspaceDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class WorkspaceDto {
    constructor(partial) {
        Object.assign(this, partial);
    }
    accountId;
    name;
    createdBy;
    updatedBy;
    deletedBy;
    createdAt;
    updatedAt;
    deletedAt;
}
exports.WorkspaceDto = WorkspaceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The id of the account' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], WorkspaceDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the workspace' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WorkspaceDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], WorkspaceDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], WorkspaceDto.prototype, "updatedBy", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], WorkspaceDto.prototype, "deletedBy", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], WorkspaceDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], WorkspaceDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], WorkspaceDto.prototype, "deletedAt", void 0);


/***/ }),

/***/ "./src/modules/workspace/dto/workspace.mapper.ts":
/*!*******************************************************!*\
  !*** ./src/modules/workspace/dto/workspace.mapper.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspaceMapper = void 0;
const workspace_entity_1 = __webpack_require__(/*! ../entities/workspace.entity */ "./src/modules/workspace/entities/workspace.entity.ts");
const workspace_dto_1 = __webpack_require__(/*! ./workspace.dto */ "./src/modules/workspace/dto/workspace.dto.ts");
class WorkspaceMapper {
    static toInterface(user) {
        return new workspace_dto_1.WorkspaceDto(user.props);
    }
    toInterface(user) {
        return WorkspaceMapper.toInterface(user);
    }
    static toDomain(user) {
        return new workspace_entity_1.Workspace({
            ...user,
        });
    }
    toDomain(user) {
        return WorkspaceMapper.toDomain(user);
    }
    static toPersistence(user) {
        return {
            ...user.props,
        };
    }
    toPersistence(user) {
        return WorkspaceMapper.toPersistence(user);
    }
}
exports.WorkspaceMapper = WorkspaceMapper;


/***/ }),

/***/ "./src/modules/workspace/entities/workspace-user.model.ts":
/*!****************************************************************!*\
  !*** ./src/modules/workspace/entities/workspace-user.model.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspaceUser = void 0;
const user_model_1 = __webpack_require__(/*! src/modules/user/entities/user.model */ "./src/modules/user/entities/user.model.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const workspace_model_1 = __webpack_require__(/*! ./workspace.model */ "./src/modules/workspace/entities/workspace.model.ts");
let WorkspaceUser = class WorkspaceUser {
    id;
    userId;
    workspaceId;
    user;
    workspace;
    createdAt;
    updatedAt;
    deletedAt;
    createdBy;
    updatedBy;
    deletedBy;
};
exports.WorkspaceUser = WorkspaceUser;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], WorkspaceUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WorkspaceUser.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WorkspaceUser.prototype, "workspaceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_model_1.User, (user) => user.workspaceUsers, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", typeof (_a = typeof user_model_1.User !== "undefined" && user_model_1.User) === "function" ? _a : Object)
], WorkspaceUser.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => workspace_model_1.Workspace, (workspace) => workspace.workspaceUsers, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'workspaceId' }),
    __metadata("design:type", typeof (_b = typeof workspace_model_1.Workspace !== "undefined" && workspace_model_1.Workspace) === "function" ? _b : Object)
], WorkspaceUser.prototype, "workspace", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], WorkspaceUser.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], WorkspaceUser.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], WorkspaceUser.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], WorkspaceUser.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], WorkspaceUser.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], WorkspaceUser.prototype, "deletedBy", void 0);
exports.WorkspaceUser = WorkspaceUser = __decorate([
    (0, typeorm_1.Entity)('workspace_users')
], WorkspaceUser);


/***/ }),

/***/ "./src/modules/workspace/entities/workspace.entity.ts":
/*!************************************************************!*\
  !*** ./src/modules/workspace/entities/workspace.entity.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Workspace = void 0;
class Workspace {
    props;
    constructor(props) {
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
            updatedAt: props.updatedAt ?? new Date(),
        };
    }
    get id() {
        return this.props.id;
    }
    get accountId() {
        return this.props.accountId;
    }
    get name() {
        return this.props.name;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    get deletedAt() {
        return this.props.deletedAt;
    }
    get createdBy() {
        return this.props.createdBy;
    }
    get updatedBy() {
        return this.props.updatedBy;
    }
    get deletedBy() {
        return this.props.deletedBy;
    }
    updateName(newName) {
        this.props.name = newName;
        this.touch();
    }
    softDelete(byUserId) {
        this.props.deletedAt = new Date();
        if (byUserId) {
            this.props.deletedBy = byUserId;
        }
        this.touch();
    }
    updateOwner(id) {
        this.props.createdBy = id;
        this.touch();
    }
    updateUpdatedBy(id) {
        this.props.updatedBy = id;
        this.touch();
    }
    restore() {
        this.props.deletedAt = undefined;
        this.props.deletedBy = undefined;
        this.touch();
    }
    touch(id) {
        this.props.updatedAt = new Date();
        if (id) {
            this.props.updatedBy = id;
        }
    }
}
exports.Workspace = Workspace;


/***/ }),

/***/ "./src/modules/workspace/entities/workspace.model.ts":
/*!***********************************************************!*\
  !*** ./src/modules/workspace/entities/workspace.model.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Workspace = void 0;
const account_model_1 = __webpack_require__(/*! src/modules/account/entities/account.model */ "./src/modules/account/entities/account.model.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const workspace_user_model_1 = __webpack_require__(/*! ./workspace-user.model */ "./src/modules/workspace/entities/workspace-user.model.ts");
const user_model_1 = __webpack_require__(/*! src/modules/user/entities/user.model */ "./src/modules/user/entities/user.model.ts");
let Workspace = class Workspace {
    id;
    accountId;
    account;
    workspaceUsers;
    users;
    name;
    createdAt;
    updatedAt;
    deletedAt;
    createdBy;
    updatedBy;
    deletedBy;
};
exports.Workspace = Workspace;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Workspace.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Workspace.prototype, "accountId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => account_model_1.Account, (account) => account.users, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'accountId' }),
    __metadata("design:type", typeof (_a = typeof account_model_1.Account !== "undefined" && account_model_1.Account) === "function" ? _a : Object)
], Workspace.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => workspace_user_model_1.WorkspaceUser, (wu) => wu.workspace),
    __metadata("design:type", Array)
], Workspace.prototype, "workspaceUsers", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_model_1.User, (user) => user.workspaces),
    (0, typeorm_1.JoinTable)({
        name: 'workspace_users',
        joinColumn: { name: 'workspaceId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'userId', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], Workspace.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Workspace.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Workspace.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Workspace.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Workspace.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Workspace.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Workspace.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Workspace.prototype, "deletedBy", void 0);
exports.Workspace = Workspace = __decorate([
    (0, typeorm_1.Entity)('workspaces')
], Workspace);


/***/ }),

/***/ "./src/modules/workspace/handlers/workspace-created.handler.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/workspace/handlers/workspace-created.handler.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspaceCreatedHandler = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const workspace_created_command_1 = __webpack_require__(/*! ../commands/workspace-created.command */ "./src/modules/workspace/commands/workspace-created.command.ts");
let WorkspaceCreatedHandler = class WorkspaceCreatedHandler {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.debug('Workspace created handler called', {
            correlationId: '8adf5d96-ec23-45bc-abf4-3d650c30a76a',
            command: JSON.stringify(command),
        });
        await new Promise((res) => res(true));
        return {
            actionId: crypto.randomUUID(),
        };
    }
};
exports.WorkspaceCreatedHandler = WorkspaceCreatedHandler;
exports.WorkspaceCreatedHandler = WorkspaceCreatedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(workspace_created_command_1.WorkspaceCreatedCommand),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object])
], WorkspaceCreatedHandler);


/***/ }),

/***/ "./src/modules/workspace/handlers/workspace-removed.handler.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/workspace/handlers/workspace-removed.handler.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspaceRemovedHandler = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const workspace_removed_command_1 = __webpack_require__(/*! ../commands/workspace-removed.command */ "./src/modules/workspace/commands/workspace-removed.command.ts");
let WorkspaceRemovedHandler = class WorkspaceRemovedHandler {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.debug('Workspace removed handler called', {
            correlationId: '4954e2c3-42c3-4aaf-b9ae-365f15d83ef6',
            command: JSON.stringify(command),
        });
        await new Promise((res) => res(true));
        return {
            actionId: crypto.randomUUID(),
        };
    }
};
exports.WorkspaceRemovedHandler = WorkspaceRemovedHandler;
exports.WorkspaceRemovedHandler = WorkspaceRemovedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(workspace_removed_command_1.WorkspaceRemovedCommand),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object])
], WorkspaceRemovedHandler);


/***/ }),

/***/ "./src/modules/workspace/handlers/workspace-updated.handler.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/workspace/handlers/workspace-updated.handler.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspaceUpdatedHandler = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const workspace_updated_command_1 = __webpack_require__(/*! ../commands/workspace-updated.command */ "./src/modules/workspace/commands/workspace-updated.command.ts");
let WorkspaceUpdatedHandler = class WorkspaceUpdatedHandler {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.debug('Workspace updated handler called', {
            correlationId: '67a859be-a168-4574-bbc3-c05b27dc4612',
            command: JSON.stringify(command),
        });
        await new Promise((res) => res(true));
        return {
            actionId: crypto.randomUUID(),
        };
    }
};
exports.WorkspaceUpdatedHandler = WorkspaceUpdatedHandler;
exports.WorkspaceUpdatedHandler = WorkspaceUpdatedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(workspace_updated_command_1.WorkspaceUpdatedCommand),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object])
], WorkspaceUpdatedHandler);


/***/ }),

/***/ "./src/modules/workspace/workspace.controller.ts":
/*!*******************************************************!*\
  !*** ./src/modules/workspace/workspace.controller.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspaceController = void 0;
const dtos_1 = __webpack_require__(/*! @app/dtos */ "./libs/dtos/src/index.ts");
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! src/guards/jwt-auth.guard */ "./src/guards/jwt-auth.guard.ts");
const policies_guard_1 = __webpack_require__(/*! src/guards/policies.guard */ "./src/guards/policies.guard.ts");
const logging_cache_interceptor_1 = __webpack_require__(/*! src/interceptors/logging-cache.interceptor */ "./src/interceptors/logging-cache.interceptor.ts");
const casl_ability_factory_1 = __webpack_require__(/*! ../casl/casl-ability.factory/casl-ability.factory */ "./src/modules/casl/casl-ability.factory/casl-ability.factory.ts");
const workspace_created_command_1 = __webpack_require__(/*! ./commands/workspace-created.command */ "./src/modules/workspace/commands/workspace-created.command.ts");
const create_workspace_dto_1 = __webpack_require__(/*! ./dto/create-workspace.dto */ "./src/modules/workspace/dto/create-workspace.dto.ts");
const update_workspace_dto_1 = __webpack_require__(/*! ./dto/update-workspace.dto */ "./src/modules/workspace/dto/update-workspace.dto.ts");
const workspace_mapper_1 = __webpack_require__(/*! ./dto/workspace.mapper */ "./src/modules/workspace/dto/workspace.mapper.ts");
const workspace_entity_1 = __webpack_require__(/*! ./entities/workspace.entity */ "./src/modules/workspace/entities/workspace.entity.ts");
const workspace_service_1 = __webpack_require__(/*! ./workspace.service */ "./src/modules/workspace/workspace.service.ts");
const workspace_removed_command_1 = __webpack_require__(/*! ./commands/workspace-removed.command */ "./src/modules/workspace/commands/workspace-removed.command.ts");
const workspace_updated_command_1 = __webpack_require__(/*! ./commands/workspace-updated.command */ "./src/modules/workspace/commands/workspace-updated.command.ts");
let WorkspaceController = class WorkspaceController {
    logger;
    service;
    mapper;
    caslAbilityFactory;
    commandBus;
    constructor(logger, service, mapper, caslAbilityFactory, commandBus) {
        this.logger = logger;
        this.service = service;
        this.mapper = mapper;
        this.caslAbilityFactory = caslAbilityFactory;
        this.commandBus = commandBus;
    }
    async create(createWorkspaceDto, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        if (!ability.can(casl_ability_factory_1.Action.Create, workspace_entity_1.Workspace)) {
            throw new common_1.UnauthorizedException();
        }
        const result = await this.service.create(createWorkspaceDto, req.user.id);
        void this.commandBus.execute(new workspace_created_command_1.WorkspaceCreatedCommand(result));
        return this.mapper.toInterface(result);
    }
    async findAll(skip = 0, take = 100, req) {
        const result = await this.service.findAll(skip, take);
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        return {
            ...result,
            data: result.data
                .filter((entity) => ability.can(casl_ability_factory_1.Action.Read, entity))
                .map((entity) => this.mapper.toInterface(entity)),
        };
    }
    async findOne(id, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        const app = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Read, app)) {
            throw new common_1.UnauthorizedException();
        }
        return this.mapper.toInterface(app);
    }
    async update(id, updateWorkspaceDto, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        const app = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Update, app)) {
            throw new common_1.UnauthorizedException();
        }
        const updated = await this.service.update(id, updateWorkspaceDto, req.user.id);
        void this.commandBus.execute(new workspace_updated_command_1.WorkspaceUpdatedCommand(updated));
        return this.mapper.toInterface(updated);
    }
    async remove(id, req) {
        const ability = await this.caslAbilityFactory.createForUser(req.user.id);
        const entity = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Delete, entity)) {
            throw new common_1.UnauthorizedException();
        }
        await this.service.remove(id, req.user.id);
        void this.commandBus.execute(new workspace_removed_command_1.WorkspaceRemovedCommand(entity));
        return entity.id;
    }
};
exports.WorkspaceController = WorkspaceController;
__decorate([
    (0, common_1.Post)(),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Create, workspace_entity_1.Workspace)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof create_workspace_dto_1.CreateWorkspaceDto !== "undefined" && create_workspace_dto_1.CreateWorkspaceDto) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", Promise)
], WorkspaceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Read, workspace_entity_1.Workspace)),
    (0, swagger_1.ApiQuery)({ name: 'skip', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'take', required: false, type: Number }),
    (0, swagger_1.ApiOkResponse)({ type: dtos_1.FindAllResponseDto }),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], WorkspaceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Read, workspace_entity_1.Workspace)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], WorkspaceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Update, workspace_entity_1.Workspace)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_h = typeof update_workspace_dto_1.UpdateWorkspaceDto !== "undefined" && update_workspace_dto_1.UpdateWorkspaceDto) === "function" ? _h : Object, Object]),
    __metadata("design:returntype", Promise)
], WorkspaceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Delete, workspace_entity_1.Workspace)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], WorkspaceController.prototype, "remove", null);
exports.WorkspaceController = WorkspaceController = __decorate([
    (0, common_1.Controller)({ path: 'workspaces', version: '1' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, policies_guard_1.PoliciesGuard),
    (0, common_1.UseInterceptors)(logging_cache_interceptor_1.ControllerCacheInterceptor, common_1.ClassSerializerInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, common_1.Inject)(workspace_service_1.WorkspaceService)),
    __param(2, (0, common_1.Inject)(workspace_mapper_1.WorkspaceMapper)),
    __param(3, (0, common_1.Inject)(casl_ability_factory_1.CaslAbilityFactory)),
    __param(4, (0, common_1.Inject)(cqrs_1.CommandBus)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof workspace_service_1.WorkspaceService !== "undefined" && workspace_service_1.WorkspaceService) === "function" ? _b : Object, typeof (_c = typeof workspace_mapper_1.WorkspaceMapper !== "undefined" && workspace_mapper_1.WorkspaceMapper) === "function" ? _c : Object, typeof (_d = typeof casl_ability_factory_1.CaslAbilityFactory !== "undefined" && casl_ability_factory_1.CaslAbilityFactory) === "function" ? _d : Object, typeof (_e = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _e : Object])
], WorkspaceController);


/***/ }),

/***/ "./src/modules/workspace/workspace.module.ts":
/*!***************************************************!*\
  !*** ./src/modules/workspace/workspace.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspaceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const workspace_service_1 = __webpack_require__(/*! ./workspace.service */ "./src/modules/workspace/workspace.service.ts");
const workspace_controller_1 = __webpack_require__(/*! ./workspace.controller */ "./src/modules/workspace/workspace.controller.ts");
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const workspace_model_1 = __webpack_require__(/*! ./entities/workspace.model */ "./src/modules/workspace/entities/workspace.model.ts");
const casl_module_1 = __webpack_require__(/*! ../casl/casl.module */ "./src/modules/casl/casl.module.ts");
const workspace_mapper_1 = __webpack_require__(/*! ./dto/workspace.mapper */ "./src/modules/workspace/dto/workspace.mapper.ts");
const workspace_created_handler_1 = __webpack_require__(/*! ./handlers/workspace-created.handler */ "./src/modules/workspace/handlers/workspace-created.handler.ts");
const workspace_removed_handler_1 = __webpack_require__(/*! ./handlers/workspace-removed.handler */ "./src/modules/workspace/handlers/workspace-removed.handler.ts");
const workspace_updated_handler_1 = __webpack_require__(/*! ./handlers/workspace-updated.handler */ "./src/modules/workspace/handlers/workspace-updated.handler.ts");
const user_model_1 = __webpack_require__(/*! ../user/entities/user.model */ "./src/modules/user/entities/user.model.ts");
const workspace_user_model_1 = __webpack_require__(/*! ./entities/workspace-user.model */ "./src/modules/workspace/entities/workspace-user.model.ts");
let WorkspaceModule = class WorkspaceModule {
};
exports.WorkspaceModule = WorkspaceModule;
exports.WorkspaceModule = WorkspaceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            logging_1.LoggingModule,
            typeorm_1.TypeOrmModule.forFeature([user_model_1.User, workspace_model_1.Workspace, workspace_user_model_1.WorkspaceUser]),
            casl_module_1.CaslModule,
        ],
        controllers: [workspace_controller_1.WorkspaceController],
        providers: [
            workspace_mapper_1.WorkspaceMapper,
            workspace_service_1.WorkspaceService,
            workspace_created_handler_1.WorkspaceCreatedHandler,
            workspace_updated_handler_1.WorkspaceUpdatedHandler,
            workspace_removed_handler_1.WorkspaceRemovedHandler,
        ],
        exports: [workspace_service_1.WorkspaceService],
    })
], WorkspaceModule);


/***/ }),

/***/ "./src/modules/workspace/workspace.service.ts":
/*!****************************************************!*\
  !*** ./src/modules/workspace/workspace.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspaceService = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const workspace_mapper_1 = __webpack_require__(/*! ./dto/workspace.mapper */ "./src/modules/workspace/dto/workspace.mapper.ts");
const workspace_model_1 = __webpack_require__(/*! ./entities/workspace.model */ "./src/modules/workspace/entities/workspace.model.ts");
const workspace_user_model_1 = __webpack_require__(/*! ./entities/workspace-user.model */ "./src/modules/workspace/entities/workspace-user.model.ts");
let WorkspaceService = class WorkspaceService {
    logger;
    repo;
    workspaceUserRepo;
    mapper;
    constructor(logger, repo, workspaceUserRepo, mapper) {
        this.logger = logger;
        this.repo = repo;
        this.workspaceUserRepo = workspaceUserRepo;
        this.mapper = mapper;
    }
    async createWithManager(createWorkspaceDto, manager) {
        const repo = manager.getRepository(workspace_model_1.Workspace);
        const entity = repo.create({ ...createWorkspaceDto });
        const result = await repo.save(entity);
        return this.mapper.toDomain(result);
    }
    async create(createWorkspaceDto, createdBy) {
        const entity = this.repo.create({ ...createWorkspaceDto, createdBy });
        const result = await this.repo.save(entity);
        const wu = this.workspaceUserRepo.create({
            workspaceId: result.id,
            userId: createdBy,
            createdBy,
        });
        await this.workspaceUserRepo.save(wu);
        return this.mapper.toDomain(result);
    }
    async findAll(skip = 0, take = 100) {
        try {
            const [entities, count] = await this.repo.findAndCount({
                skip,
                take,
            });
            return {
                data: entities.map((entity) => this.mapper.toDomain(entity)),
                pagination: {
                    total: count,
                    skip,
                    take,
                    hasNextPage: skip + take < count,
                },
            };
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.findAll.name} encountered an error`, {
                correlationId: '6d437955-6b3a-417d-825b-3f43dedd8825',
                err: JSON.stringify(err),
            });
            return {
                data: [],
                pagination: { total: 0, skip: 0, take, hasNextPage: false },
            };
        }
    }
    async findOne(id) {
        try {
            const entity = await this.repo.findOneBy({ id });
            if (!entity) {
                throw new common_1.NotFoundException();
            }
            return this.mapper.toDomain(entity);
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.findOne.name} encountered an error`, {
                correlationId: '6acb4b57-7592-4f08-869c-b4a14cddd072',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async findOneByName(name) {
        try {
            const model = await this.repo.findOneBy({ name });
            if (!model) {
                throw new common_1.NotFoundException();
            }
            return this.mapper.toDomain(model);
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.findOneByName.name} encountered an error`, {
                correlationId: '7cce84d8-8f89-4058-8d2e-af450cfad2d3',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async updateWithManager(id, updateWorkspaceDto, manager) {
        try {
            const repo = manager.getRepository(workspace_model_1.Workspace);
            const model = await repo.findOneBy({ id });
            if (!model) {
                throw new common_1.NotFoundException();
            }
            const entity = this.mapper.toDomain(model);
            if (updateWorkspaceDto.name) {
                entity.updateName(updateWorkspaceDto.name);
            }
            if (updateWorkspaceDto.createdBy) {
                entity.updateOwner(updateWorkspaceDto.createdBy);
            }
            if (updateWorkspaceDto.updatedBy) {
                entity.updateUpdatedBy(updateWorkspaceDto.updatedBy);
            }
            await repo.update(entity.id, this.mapper.toPersistence(entity));
            return entity;
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.updateWithManager.name} encountered an error`, {
                correlationId: '6befde88-ff55-4a59-9c7b-8b47a5980dd4',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async update(id, updateWorkspaceDto, updatedBy) {
        try {
            const entity = await this.findOne(id);
            if (updateWorkspaceDto.name) {
                entity.updateName(updateWorkspaceDto.name);
            }
            entity.updateUpdatedBy(updatedBy);
            await this.repo.update(entity.id, this.mapper.toPersistence(entity));
            return entity;
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.update.name} encountered an error`, {
                correlationId: '6befde88-ff55-4a59-9c7b-8b47a5980dd4',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async remove(id, removedBy) {
        try {
            const entity = await this.findOne(id);
            entity.softDelete(removedBy);
            await this.repo.update(entity.id, this.mapper.toPersistence(entity));
            return entity;
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.remove.name} encountered an error`, {
                correlationId: 'b76287ba-c244-475f-adcb-52c6917ba739',
                err: JSON.stringify(err),
            });
            throw new common_1.InternalServerErrorException();
        }
    }
};
exports.WorkspaceService = WorkspaceService;
exports.WorkspaceService = WorkspaceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, typeorm_1.InjectRepository)(workspace_model_1.Workspace)),
    __param(2, (0, typeorm_1.InjectRepository)(workspace_user_model_1.WorkspaceUser)),
    __param(3, (0, common_1.Inject)(workspace_mapper_1.WorkspaceMapper)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof workspace_mapper_1.WorkspaceMapper !== "undefined" && workspace_mapper_1.WorkspaceMapper) === "function" ? _d : Object])
], WorkspaceService);


/***/ }),

/***/ "@casl/ability":
/*!********************************!*\
  !*** external "@casl/ability" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@casl/ability");

/***/ }),

/***/ "@keyv/redis":
/*!******************************!*\
  !*** external "@keyv/redis" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@keyv/redis");

/***/ }),

/***/ "@nestjs/axios":
/*!********************************!*\
  !*** external "@nestjs/axios" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),

/***/ "@nestjs/cache-manager":
/*!****************************************!*\
  !*** external "@nestjs/cache-manager" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/cache-manager");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/cqrs":
/*!*******************************!*\
  !*** external "@nestjs/cqrs" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/cqrs");

/***/ }),

/***/ "@nestjs/event-emitter":
/*!****************************************!*\
  !*** external "@nestjs/event-emitter" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/event-emitter");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mapped-types":
/*!***************************************!*\
  !*** external "@nestjs/mapped-types" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/schedule":
/*!***********************************!*\
  !*** external "@nestjs/schedule" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/terminus":
/*!***********************************!*\
  !*** external "@nestjs/terminus" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/terminus");

/***/ }),

/***/ "@nestjs/throttler":
/*!************************************!*\
  !*** external "@nestjs/throttler" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@nestjs/throttler");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cacheable":
/*!****************************!*\
  !*** external "cacheable" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("cacheable");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "keyv":
/*!***********************!*\
  !*** external "keyv" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("keyv");

/***/ }),

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;