import { createSlice } from "@reduxjs/toolkit";
import IMAGES from "../images/Images"

export const shoesSlice = createSlice({
    name: "shoes",
    initialState: {
        value: [
            {
                id: 0,
                title: 'Abby Arancio',
                price: 139.90,
                imgURL: IMAGES.Abby1,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: true,
                cover: IMAGES.Abby1_top,
                qty: 1,
              },
              {
                id: 1,
                title: 'Abby lime',
                price: 124.90 ,
                imgURL: IMAGES.Abby2,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: true,
                cover: IMAGES.Abby2_top,
                qty: 1,
              }, 
              {
                id: 2,
                title: 'Alisha Navy',
                price: 119.90 ,
                imgURL: IMAGES.Abby3,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: true,
                cover: IMAGES.Abby3_top,
                qty: 1,
              }, 
              {
                id: 3,
                title: 'Alisha Camelia',
                price: 129.90,
                imgURL: IMAGES.Abby4,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: true,
                cover: IMAGES.Abby4_top,
                qty: 1,
              }, 
              {
                id: 4,
                title: 'Betsy Fuxia',
                price: 139.90 ,
                imgURL: IMAGES.Betsy1,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: true,
                cover: IMAGES.Betsy1_top,
                qty: 1,
              }, 
              {
                id: 5,
                title: 'Betsy Arancio',
                price: 159.90 ,
                imgURL: IMAGES.Betsy2,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: true,
                cover: IMAGES.Betsy2_top,
                qty: 1,
              }, 
              {
                id: 6,
                title: 'Betsy Camelia',
                price: 169.90 ,
                imgURL: IMAGES.Betsy3,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: true,
                cover: IMAGES.Betsy3_top,
                qty: 1,
              }, 
              {
                id: 7,
                title: 'Sly Denim',
                price: 109.90 ,
                imgURL: IMAGES.Smith1,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: true,
                cover: IMAGES.Smith1_top,
                qty: 1,
              }, 
              {
                id: 8,
                title: 'Sly Antik',
                price: 129.90 ,
                imgURL: IMAGES.Smith2,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: true,
                cover: IMAGES.Smith2_top,
                qty: 1,
              }, 
              {
                id: 9,
                title: 'Sybil Oro',
                price: 168.20 ,
                imgURL: IMAGES.Smith3,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: true,
                cover: IMAGES.Smith3_top,
                qty: 1,
              }, 
              {
                id: 10,
                title: 'Gipsy Arancio',
                price: 127.50,
                imgURL: IMAGES.Glenn1,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: true,
                cover: IMAGES.Glenn1_top,
                qty: 1,
              }, 
              {
                id: 11,
                title: 'Glove Nero',
                price: 119.80 ,
                imgURL: IMAGES.Glenn2,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: true,
                cover: IMAGES.Glenn2_top,
                qty: 1,
              }, 
              {
                id: 12,
                title: 'Glem Fuxia',
                price: 139.90 ,
                imgURL: IMAGES.Glenn3,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: true,
                cover: IMAGES.Glenn3_top,
                qty: 1,
              }, 
              {
                id: 13,
                title: 'Sky Brown',
                price: 189.60 ,
                imgURL: IMAGES.X1,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: false,
                cover: IMAGES.X1_cover,
                qty: 1,
              }, 
              {
                id: 14,
                title: 'Sky Green',
                price: 199.90 ,
                imgURL: IMAGES.X2,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: false,
                cover: IMAGES.X2_cover,
                qty: 1,
              }, 
              {
                id: 15,
                title: 'Ginny Brown',
                price: 139.40 ,
                imgURL: IMAGES.Beige1,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: false,
                cover: IMAGES.Beige1_cover,
                qty: 1,
              }, 
              {
                id: 16,
                title: 'Ginny Sand',
                price: 109.80 ,
                imgURL: IMAGES.Beige2,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: false,
                cover: IMAGES.Beige2_cover,
                qty: 1,
              }, 
              {
                id: 17,
                title: 'Ginny Black',
                price: 119.90 ,
                imgURL: IMAGES.Carpet1,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: false,
                cover: IMAGES.Carpet1_cover,
                qty: 1,
              }, 
              {
                id: 18,
                title: 'Ginny Red',
                price: 120.90 ,
                imgURL: IMAGES.Carpet2,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: false,
                cover: IMAGES.Carpet2_cover,
                qty: 1,
              }, 
              {
                id: 19,
                title: 'Ginny Blu',
                price:  129.90 ,
                imgURL: IMAGES.Classic1,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: false,
                cover: IMAGES.Classic1_cover,
                qty: 1,
              }, 
              {
                id: 20,
                title: 'Ginny White',
                price: 139.90,
                imgURL: IMAGES.Classic2,
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                woman: false,
                cover: IMAGES.Classic2_cover,
                qty: 1,
              }, 
        ],
    },
})

export const { add } = shoesSlice.actions

export const shoesReducer = shoesSlice.reducer