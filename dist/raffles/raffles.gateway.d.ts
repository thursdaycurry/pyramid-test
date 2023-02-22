import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Socket } from 'socket.io';
export declare class RafflesGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
    private logger;
    afterInit(): void;
    handleDisconnect(socket: Socket): Promise<void>;
    handleConnection(socket: Socket): void;
    bid(data: any, socket: Socket): Promise<any>;
}
