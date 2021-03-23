/** @format */

import AuthServices from './authServices'
import HotelServices from './hotelServices'
import RoomServices from './roomServices'
import OrderServices from './orderServices'
import SearchEngine from './searchEngine'
import PaymentServices from './paymentServices'
import { PaymentActions } from 'actions/paymentActions'

export const authServices = new AuthServices()
export const hotelServices = new HotelServices()
export const roomServices = new RoomServices()
export const orderServices = new OrderServices()
export const searchEngine = new SearchEngine()
export const paymentServices = new PaymentServices()
