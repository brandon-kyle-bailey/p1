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
        void this.shipLogs(message, optionalParams);
    }
    error(message, ...optionalParams) {
        super.error(message, ...optionalParams);
        void this.shipLogs(message, optionalParams);
    }
    warn(message, ...optionalParams) {
        super.warn(message, ...optionalParams);
        void this.shipLogs(message, optionalParams);
    }
    debug(message, ...optionalParams) {
        super.debug(message, ...optionalParams);
        void this.shipLogs(message, optionalParams);
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

/***/ "./src/decorators/user.decorator.ts":
/*!******************************************!*\
  !*** ./src/decorators/user.decorator.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.User = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    if (!user)
        return undefined;
    return data ? user[data] : user;
});


/***/ }),

/***/ "./src/guards/auth.guard.ts":
/*!**********************************!*\
  !*** ./src/guards/auth.guard.ts ***!
  \**********************************/
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
let AuthGuard = class AuthGuard {
    jwtService;
    logger;
    constructor(jwtService, logger) {
        this.jwtService = jwtService;
        this.logger = logger;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const payload = this.jwtService.verify(token, {
                secret: '7ac54472-4dcf-4fa1-be39-8967d47d02d6',
            });
            request['user'] = payload;
            this.logger.debug(`${this.constructor.name}.${this.canActivate.name}`, {
                correlationId: 'b2224bd3-5de3-4de1-b9e4-6596bc5dc8fb',
                payload: JSON.stringify(payload),
            });
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
        return true;
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(logging_1.LoggingService)),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _b : Object])
], AuthGuard);


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
exports.LoggingCacheInterceptor = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const cache_manager_1 = __webpack_require__(/*! @nestjs/cache-manager */ "@nestjs/cache-manager");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
let LoggingCacheInterceptor = class LoggingCacheInterceptor extends cache_manager_1.CacheInterceptor {
    logger;
    constructor(cacheManager, reflector, logger) {
        super(cacheManager, reflector);
        this.logger = logger;
    }
    trackBy(context) {
        const key = super.trackBy(context);
        this.logger.debug(`${this.constructor.name}.${this.trackBy.name}`, {
            correlationId: '159b8055-b731-46f3-88e8-0ede0576a2e8',
            key,
        });
        return key;
    }
};
exports.LoggingCacheInterceptor = LoggingCacheInterceptor;
exports.LoggingCacheInterceptor = LoggingCacheInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object, typeof (_b = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _b : Object])
], LoggingCacheInterceptor);


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
const app_module_1 = __webpack_require__(/*! ./modules/app.module */ "./src/modules/app.module.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
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
    app.useGlobalPipes(new common_1.ValidationPipe());
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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountController = void 0;
const dtos_1 = __webpack_require__(/*! @app/dtos */ "./libs/dtos/src/index.ts");
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
const logging_cache_interceptor_1 = __webpack_require__(/*! src/interceptors/logging-cache.interceptor */ "./src/interceptors/logging-cache.interceptor.ts");
const account_service_1 = __webpack_require__(/*! ./account.service */ "./src/modules/account/account.service.ts");
const account_created_command_1 = __webpack_require__(/*! ./commands/account-created.command */ "./src/modules/account/commands/account-created.command.ts");
const create_account_dto_1 = __webpack_require__(/*! ./dto/create-account.dto */ "./src/modules/account/dto/create-account.dto.ts");
const update_account_dto_1 = __webpack_require__(/*! ./dto/update-account.dto */ "./src/modules/account/dto/update-account.dto.ts");
let AccountController = class AccountController {
    logger;
    service;
    commandBus;
    constructor(logger, service, commandBus) {
        this.logger = logger;
        this.service = service;
        this.commandBus = commandBus;
    }
    async create(createAccountDto) {
        const result = await this.service.create(createAccountDto);
        await this.commandBus.execute(new account_created_command_1.AccountCreatedCommand(result));
        return result;
    }
    async findAll(skip = 0, take = 100) {
        return await this.service.findAll(skip, take);
    }
    findOne(id) {
        return this.service.findOne(id);
    }
    update(id, updateAccountDto) {
        return this.service.update(id, updateAccountDto);
    }
    remove(id) {
        return this.service.remove(id);
    }
};
exports.AccountController = AccountController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof create_account_dto_1.CreateAccountDto !== "undefined" && create_account_dto_1.CreateAccountDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'skip', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'take', required: false, type: Number }),
    (0, swagger_1.ApiOkResponse)({ type: dtos_1.FindAllResponseDto }),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AccountController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, throttler_1.Throttle)({ default: { limit: 10, ttl: 60000 } }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_f = typeof update_account_dto_1.UpdateAccountDto !== "undefined" && update_account_dto_1.UpdateAccountDto) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, throttler_1.Throttle)({ default: { limit: 10, ttl: 60000 } }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "remove", null);
exports.AccountController = AccountController = __decorate([
    (0, common_1.Controller)('accounts'),
    (0, common_1.UseInterceptors)(logging_cache_interceptor_1.LoggingCacheInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, common_1.Inject)(account_service_1.AccountService)),
    __param(2, (0, common_1.Inject)(cqrs_1.CommandBus)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof account_service_1.AccountService !== "undefined" && account_service_1.AccountService) === "function" ? _b : Object, typeof (_c = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _c : Object])
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
    async create(createAccountDto) {
        const entity = this.repo.create({ ...createAccountDto });
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
    async update(id, updateAccountDto) {
        try {
            const entity = await this.findOne(id);
            if (updateAccountDto.name) {
                entity.updateName(updateAccountDto.name);
            }
            if (updateAccountDto.createdBy) {
                entity.updateOwner(updateAccountDto.createdBy);
            }
            if (updateAccountDto.updatedBy) {
                entity.updateUpdatedBy(updateAccountDto.updatedBy);
            }
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
    async remove(id) {
        try {
            const entity = await this.findOne(id);
            entity.softDelete(entity.updatedBy);
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
let AccountMapper = AccountMapper_1 = class AccountMapper {
    static toInterface(entity) {
        return {
            ...entity.props,
        };
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAccountDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateAccountDto {
    name;
    createdBy;
    updatedBy;
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
const user_model_1 = __webpack_require__(/*! src/modules/user/entities/user.model */ "./src/modules/user/entities/user.model.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Account = class Account {
    id;
    name;
    users;
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
                    entities: [account_model_1.Account, user_model_1.User],
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
        ],
        providers: [{ provide: core_1.APP_GUARD, useClass: logging_thottler_guard_1.LoggingThrottlerGuard }],
    })
], AppModule);


/***/ }),

/***/ "./src/modules/auth/auth.controller.ts":
/*!*********************************************!*\
  !*** ./src/modules/auth/auth.controller.ts ***!
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/auth.service.ts");
const login_dto_1 = __webpack_require__(/*! ./dto/login.dto */ "./src/modules/auth/dto/login.dto.ts");
const register_dto_1 = __webpack_require__(/*! ./dto/register.dto */ "./src/modules/auth/dto/register.dto.ts");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async login(loginDto) {
        return await this.authService.login(loginDto);
    }
    async register(registerDto) {
        return await this.authService.register(registerDto);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof login_dto_1.LoginDto !== "undefined" && login_dto_1.LoginDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof register_dto_1.RegisterDto !== "undefined" && register_dto_1.RegisterDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
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
            jwt_1.JwtModule.register({
                global: true,
                secret: '7ac54472-4dcf-4fa1-be39-8967d47d02d6',
                signOptions: { expiresIn: '1h' },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService],
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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const bcrypt = __importStar(__webpack_require__(/*! bcrypt */ "bcrypt"));
const account_service_1 = __webpack_require__(/*! ../account/account.service */ "./src/modules/account/account.service.ts");
const user_service_1 = __webpack_require__(/*! ../user/user.service */ "./src/modules/user/user.service.ts");
const create_account_dto_1 = __webpack_require__(/*! ../account/dto/create-account.dto */ "./src/modules/account/dto/create-account.dto.ts");
const create_user_dto_1 = __webpack_require__(/*! ../user/dto/create-user.dto */ "./src/modules/user/dto/create-user.dto.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const update_user_dto_1 = __webpack_require__(/*! ../user/dto/update-user.dto */ "./src/modules/user/dto/update-user.dto.ts");
const update_account_dto_1 = __webpack_require__(/*! ../account/dto/update-account.dto */ "./src/modules/account/dto/update-account.dto.ts");
let AuthService = class AuthService {
    logger;
    dataSource;
    httpService;
    userService;
    accountService;
    jwtService;
    constructor(logger, dataSource, httpService, userService, accountService, jwtService) {
        this.logger = logger;
        this.dataSource = dataSource;
        this.httpService = httpService;
        this.userService = userService;
        this.accountService = accountService;
        this.jwtService = jwtService;
    }
    _generateToken(user) {
        const payload = { sub: user.id, username: user.email, role: user.role };
        const access_token = this.jwtService.sign(payload);
        const refresh_token = this.jwtService.sign(payload);
        return {
            access_token,
            refresh_token,
        };
    }
    async login(loginDto) {
        this.logger.debug(`${this.constructor.name}.${this.login.name}`, {
            correlationId: 'a858f469-1368-4fa2-a238-e139b491526e',
            loginDto: JSON.stringify(loginDto),
        });
        const user = await this.userService.findOneByEmail(loginDto.email);
        if (!user) {
            throw new common_1.NotFoundException();
        }
        const isMatch = await bcrypt.compare(loginDto.password, user.password);
        if (!isMatch) {
            throw new common_1.BadRequestException();
        }
        const token = this._generateToken(user);
        const updateUserDto = new update_user_dto_1.UpdateUserDto();
        updateUserDto.refresh_token = token.refresh_token;
        await this.userService.update(user.id, updateUserDto, user.id);
        return token;
    }
    async register(registerDto) {
        this.logger.debug(`${this.constructor.name}.${this.register.name}`, {
            correlationId: '4f54024e-6d09-4ca3-ab83-6bd2af6a59d1',
            loginDto: JSON.stringify(registerDto),
        });
        if (registerDto.password !== registerDto.confirmPassword) {
            throw new common_1.BadRequestException();
        }
        return this.dataSource.transaction(async (manager) => {
            const createAccountDto = new create_account_dto_1.CreateAccountDto();
            createAccountDto.name = `${registerDto.email}'s Account`;
            const account = await this.accountService.createWithManager(createAccountDto, manager);
            const createUserDto = new create_user_dto_1.CreateUserDto();
            createUserDto.accountId = account.id;
            createUserDto.email = registerDto.email;
            createUserDto.password = bcrypt.hashSync(registerDto.password, 10);
            const user = await this.userService.createWithManager(createUserDto, manager);
            const updateAccountDto = new update_account_dto_1.UpdateAccountDto();
            updateAccountDto.createdBy = user.id;
            await this.accountService.updateWithManager(account.id, updateAccountDto, manager);
            const token = this._generateToken(user);
            const updateUserDto = new update_user_dto_1.UpdateUserDto();
            updateUserDto.refresh_token = token.refresh_token;
            await this.userService.updateWithManager(user.id, updateUserDto, manager);
            return token;
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(logging_1.LoggingService)),
    __param(1, (0, common_1.Inject)(typeorm_1.DataSource)),
    __param(2, (0, common_1.Inject)(axios_1.HttpService)),
    __param(3, (0, common_1.Inject)(user_service_1.UserService)),
    __param(4, (0, common_1.Inject)(account_service_1.AccountService)),
    __param(5, (0, common_1.Inject)(jwt_1.JwtService)),
    __metadata("design:paramtypes", [typeof (_a = typeof logging_1.LoggingService !== "undefined" && logging_1.LoggingService) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _b : Object, typeof (_c = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _c : Object, typeof (_d = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _d : Object, typeof (_e = typeof account_service_1.AccountService !== "undefined" && account_service_1.AccountService) === "function" ? _e : Object, typeof (_f = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _f : Object])
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
    email;
    password;
}
exports.LoginDto = LoginDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The email address of the user' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
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
    email;
    password;
    confirmPassword;
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The email address of the user' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
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
        const { can, cannot, build } = new ability_1.AbilityBuilder(ability_1.createMongoAbility);
        if ([user_entity_1.Role.Owner, user_entity_1.Role.Admin].includes(user.role)) {
            can(Action.Manage, 'all');
        }
        else {
            can(Action.Read, user_entity_1.User);
            can(Action.Read, account_entity_1.Account, { createdBy: user.id });
            can(Action.Read, account_entity_1.Account, { id: user.accountId });
            can(Action.Update, user_entity_1.User, { id: user.id });
            can(Action.Update, account_entity_1.Account, { createdBy: user.id });
            can(Action.Create, user_entity_1.User);
            cannot(Action.Create, account_entity_1.Account);
            cannot(Action.Delete, user_entity_1.User);
            cannot(Action.Delete, account_entity_1.Account);
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

/***/ "./src/modules/user/dto/user.mapper.ts":
/*!*********************************************!*\
  !*** ./src/modules/user/dto/user.mapper.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserMapper = void 0;
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./src/modules/user/entities/user.entity.ts");
class UserMapper {
    static toInterface(user) {
        return {
            ...user.props,
        };
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const account_model_1 = __webpack_require__(/*! src/modules/account/entities/account.model */ "./src/modules/account/entities/account.model.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./src/modules/user/entities/user.entity.ts");
let User = class User {
    id;
    accountId;
    account;
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
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: user_entity_1.Role, default: user_entity_1.Role.User }),
    __metadata("design:type", typeof (_b = typeof user_entity_1.Role !== "undefined" && user_entity_1.Role) === "function" ? _b : Object)
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
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
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
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const logging_cache_interceptor_1 = __webpack_require__(/*! src/interceptors/logging-cache.interceptor */ "./src/interceptors/logging-cache.interceptor.ts");
const user_created_command_1 = __webpack_require__(/*! ./commands/user-created.command */ "./src/modules/user/commands/user-created.command.ts");
const create_user_dto_1 = __webpack_require__(/*! ./dto/create-user.dto */ "./src/modules/user/dto/create-user.dto.ts");
const update_user_dto_1 = __webpack_require__(/*! ./dto/update-user.dto */ "./src/modules/user/dto/update-user.dto.ts");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./src/modules/user/user.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./src/modules/user/entities/user.entity.ts");
const dtos_1 = __webpack_require__(/*! @app/dtos */ "./libs/dtos/src/index.ts");
const policies_guard_1 = __webpack_require__(/*! src/guards/policies.guard */ "./src/guards/policies.guard.ts");
const casl_ability_factory_1 = __webpack_require__(/*! ../casl/casl-ability.factory/casl-ability.factory */ "./src/modules/casl/casl-ability.factory/casl-ability.factory.ts");
const auth_guard_1 = __webpack_require__(/*! src/guards/auth.guard */ "./src/guards/auth.guard.ts");
const user_mapper_1 = __webpack_require__(/*! ./dto/user.mapper */ "./src/modules/user/dto/user.mapper.ts");
const user_decorator_1 = __webpack_require__(/*! ../../decorators/user.decorator */ "./src/decorators/user.decorator.ts");
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
    async create(createUserDto, userId) {
        const result = await this.service.create(createUserDto, userId);
        await this.commandBus.execute(new user_created_command_1.UserCreatedCommand(result));
        return result;
    }
    async findAll(skip = 0, take = 100) {
        const result = await this.service.findAll(skip, take);
        return {
            ...result,
            data: result.data.map((user) => this.mapper.toInterface(user)),
        };
    }
    async findOne(id, userId) {
        const ability = await this.caslAbilityFactory.createForUser(userId);
        const user = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Read, user)) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
    async update(id, updateUserDto, userId) {
        const ability = await this.caslAbilityFactory.createForUser(userId);
        const user = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Update, user)) {
            this.logger.debug('failing because we got here....');
            throw new common_1.UnauthorizedException();
        }
        return this.service.update(id, updateUserDto, userId);
    }
    async remove(id, userId) {
        const ability = await this.caslAbilityFactory.createForUser(userId);
        const user = await this.service.findOne(id);
        if (!ability.can(casl_ability_factory_1.Action.Update, user)) {
            throw new common_1.UnauthorizedException();
        }
        return this.service.remove(id, userId);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Create, user_entity_1.User)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _f : Object, String]),
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
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Read, user_entity_1.User)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Update, user_entity_1.User)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_h = typeof update_user_dto_1.UpdateUserDto !== "undefined" && update_user_dto_1.UpdateUserDto) === "function" ? _h : Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, policies_guard_1.CheckPolicies)((ability) => ability.can(casl_ability_factory_1.Action.Delete, user_entity_1.User)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, policies_guard_1.PoliciesGuard),
    (0, common_1.UseInterceptors)(logging_cache_interceptor_1.LoggingCacheInterceptor),
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
            const entity = await this.repo.findOneBy({ email });
            if (entity) {
                return this.mapper.toDomain(entity);
            }
            return null;
        }
        catch (err) {
            this.logger.error(`${this.constructor.name}.${this.findOneByEmail.name} encountered an error`, {
                correlationId: '6befde88-ff55-4a59-9c7b-8b47a5980dd4',
                err: JSON.stringify(err),
            });
            return null;
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