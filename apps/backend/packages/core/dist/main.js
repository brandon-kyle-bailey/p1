/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
let LoggingModule = class LoggingModule {
};
exports.LoggingModule = LoggingModule;
exports.LoggingModule = LoggingModule = __decorate([
    (0, common_1.Module)({
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggingService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let LoggingService = class LoggingService extends common_1.ConsoleLogger {
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
    (0, common_1.Injectable)()
], LoggingService);


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggingThrottlerGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
let LoggingThrottlerGuard = class LoggingThrottlerGuard extends throttler_1.ThrottlerGuard {
    async canActivate(context) {
        const allowed = await super.canActivate(context);
        console.log('Throttler allowed:', allowed);
        return allowed;
    }
};
exports.LoggingThrottlerGuard = LoggingThrottlerGuard;
exports.LoggingThrottlerGuard = LoggingThrottlerGuard = __decorate([
    (0, common_1.Injectable)()
], LoggingThrottlerGuard);


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
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {});
    const configService = app.get(config_1.ConfigService);
    app.enableVersioning({
        type: common_1.VersioningType.URI,
    });
    app.setGlobalPrefix('api/core');
    app.useLogger(new logging_1.LoggingService({ prefix: 'core-service' }));
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountController = void 0;
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const cache_manager_1 = __webpack_require__(/*! @nestjs/cache-manager */ "@nestjs/cache-manager");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const account_service_1 = __webpack_require__(/*! ./account.service */ "./src/modules/account/account.service.ts");
const account_created_command_1 = __webpack_require__(/*! ./commands/account-created.command */ "./src/modules/account/commands/account-created.command.ts");
const create_account_dto_1 = __webpack_require__(/*! ./dto/create-account.dto */ "./src/modules/account/dto/create-account.dto.ts");
const update_account_dto_1 = __webpack_require__(/*! ./dto/update-account.dto */ "./src/modules/account/dto/update-account.dto.ts");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
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
        this.logger.debug('Account create controller called', {
            correlationId: '858c6084-0e8c-4d26-81a1-1f69ac5ae4e3',
            body: JSON.stringify(createAccountDto),
        });
        const result = await this.service.create(createAccountDto);
        await this.commandBus.execute(new account_created_command_1.AccountCreatedCommand(result));
        return result;
    }
    async findAll() {
        this.logger.debug('Account findAll controller called', {
            correlationId: '1401d001-db0a-451d-aa5b-c8e4d6758f8f',
        });
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.findOne(+id);
    }
    update(id, updateAccountDto) {
        return this.service.update(+id, updateAccountDto);
    }
    remove(id) {
        return this.service.remove(+id);
    }
};
exports.AccountController = AccountController;
__decorate([
    (0, common_1.Post)(),
    (0, throttler_1.Throttle)({ default: { limit: 10, ttl: 60000 } }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof create_account_dto_1.CreateAccountDto !== "undefined" && create_account_dto_1.CreateAccountDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "create", null);
__decorate([
    (0, cache_manager_1.CacheTTL)(60 * 1000),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
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
    __metadata("design:paramtypes", [String, typeof (_e = typeof update_account_dto_1.UpdateAccountDto !== "undefined" && update_account_dto_1.UpdateAccountDto) === "function" ? _e : Object]),
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
    (0, common_1.UseInterceptors)(cache_manager_1.CacheInterceptor),
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
let AccountModule = class AccountModule {
};
exports.AccountModule = AccountModule;
exports.AccountModule = AccountModule = __decorate([
    (0, common_1.Module)({
        imports: [logging_1.LoggingModule, typeorm_1.TypeOrmModule.forFeature([account_model_1.Account])],
        controllers: [account_controller_1.AccountController],
        providers: [account_mapper_1.AccountMapper, account_service_1.AccountService, account_created_handler_1.AccountCreatedHandler],
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const account_model_1 = __webpack_require__(/*! ./entities/account.model */ "./src/modules/account/entities/account.model.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const account_mapper_1 = __webpack_require__(/*! ./dto/account.mapper */ "./src/modules/account/dto/account.mapper.ts");
const logging_1 = __webpack_require__(/*! @app/logging */ "./libs/logging/src/index.ts");
const accounts = [];
let AccountService = class AccountService {
    logger;
    repo;
    mapper;
    constructor(logger, repo, mapper) {
        this.logger = logger;
        this.repo = repo;
        this.mapper = mapper;
    }
    async create(createAccountDto) {
        this.logger.debug('Create account service called', {
            correlationId: 'f62ebb05-fc0e-4ed8-945b-f0a8b7acaef4',
        });
        const account = this.repo.create({ ...createAccountDto });
        const result = await this.repo.save(account);
        accounts.push(result);
        return this.mapper.toDomain(result);
    }
    findAll() {
        this.logger.debug('Findall account service called', {
            correlationId: 'a3b2ec3c-34c5-4026-989c-133ad55e87fd',
        });
        return accounts;
    }
    findOne(id) {
        return `This action returns a #${id} account`;
    }
    update(id, _updateAccountDto) {
        return `This action updates a #${id} account`;
    }
    remove(id) {
        return `This action removes a #${id} account`;
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountMapper = void 0;
const account_entity_1 = __webpack_require__(/*! ../entities/account.entity */ "./src/modules/account/entities/account.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AccountMapper = class AccountMapper {
    toDomain(model) {
        return new account_entity_1.Account(model);
    }
};
exports.AccountMapper = AccountMapper;
exports.AccountMapper = AccountMapper = __decorate([
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
}
exports.CreateAccountDto = CreateAccountDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the account' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "name", void 0);


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
    }
    restore() {
        this.props.deletedAt = undefined;
        this.props.deletedBy = undefined;
    }
    touch() {
        this.props.updatedAt = new Date();
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
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Account = class Account {
    id;
    name;
    createdAt;
    updatedAt;
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
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Account.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Account.prototype, "updatedAt", void 0);
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
                    entities: [account_model_1.Account],
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
                            new redis_1.default(redisUrl),
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
        ],
        providers: [{ provide: core_1.APP_GUARD, useClass: logging_thottler_guard_1.LoggingThrottlerGuard }],
    })
], AppModule);


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