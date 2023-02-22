"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RafflesGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let RafflesGateway = class RafflesGateway {
    constructor() {
        this.logger = new common_1.Logger('chat');
    }
    afterInit() {
        this.logger.log('init');
    }
    async handleDisconnect(socket) {
        this.logger.log(`disconnected : ${socket.id} ${socket.nsp.name}`);
    }
    handleConnection(socket) {
        this.logger.log(`connected : ${socket.id} ${socket.nsp.name}`);
    }
    async bid(data, socket) {
        console.log(data);
        const date = new Date();
        const broadcastData = { data: data, time: date };
        socket.broadcast.emit('bidList', broadcastData);
        return data;
    }
};
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], RafflesGateway.prototype, "handleDisconnect", null);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], RafflesGateway.prototype, "handleConnection", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('bidding'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], RafflesGateway.prototype, "bid", null);
RafflesGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true, namespace: '/raffles' })
], RafflesGateway);
exports.RafflesGateway = RafflesGateway;
//# sourceMappingURL=raffles.gateway.js.map