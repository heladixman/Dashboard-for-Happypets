import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { FiEdit } from 'react-icons/fi';
import {BsPlusLg} from 'react-icons/bs'

import { Header } from '../components';
import { EditorData, productCategoryOption } from '../data/dummy';

const NewProduct = () => (
  <div className="m-2 md:m-10 my-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Halaman" title="Tambah Product" />
    <form action="">
        <div className='justify-start flex content-center items-center my-4'>
          <label for="product-name" class="font-medium text-black dark:text-gray-200 w-1/5">Nama Produk</label>
          <input className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-4/5 p-2.5 dark:bg-secondary-dark-bg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Nama Produk" required></input>
        </div>
        <div className='justify-start flex content-center items-center my-4'>
          <label for="sku" class="font-medium text-black dark:text-gray-200 w-1/5 content-center">SKU</label>
          <input className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-4/5 p-2.5 dark:bg-secondary-dark-bg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan SKU produk" required></input>
        </div>
        <div className='justify-start flex content-center items-center my-4'>
          <label for="product-category" class="font-medium text-black dark:text-gray-200 w-1/5 content-center">Kategori Produk</label>
          <select id="product-category" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-4/5 p-2.5 dark:bg-secondary-dark-bg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pilih Kategori Produk">
            {productCategoryOption.map((item,key)=>(
                <option key={key} value={item.Name}>{item.Name}</option>
            ))}
          </select>
        </div>
        <div className='justify-start flex content-center items-center my-4'>
          <label for="sku" class="font-medium text-black dark:text-gray-200 w-1/5 content-center">Gambar Produk</label>
          <div id="product-image" className='rounded bg-white shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block dark:bg-secondary-dark-bg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-10'>
            <button>
              <span className='text-2xl'><BsPlusLg/></span>
            </button>
          </div>
          
        </div>
    </form>
    <div className='justify-start flex content-center items-center my-4'>
      <span className='w-1/5 font-medium dark:text-gray-200'>Produk Deskripsi</span>
      <div className='w-4/5'>
          <RichTextEditorComponent>
          <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
        </RichTextEditorComponent>
      </div>
    </div>

    <div className='justify-start flex content-center items-center my-4'>
      <span className='w-1/5 font-medium dark:text-gray-200'>Produk Spesifikasi</span>
      <div className='w-4/5'>
          <RichTextEditorComponent>
          <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
        </RichTextEditorComponent>
      </div>
    </div>

    <div className='justify-start flex content-center items-center my-4'>
          <label for="product-name" class="font-medium text-black dark:text-gray-200 w-1/5">Link Video</label>
          <input className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-4/5 p-2.5 dark:bg-secondary-dark-bg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Link Video Youtube Disini" required></input>
    </div>

    <div className='justify-end flex content-center items-center my-4'>
          <button type="submit" className="shadow-sm bg-white text-gray-900 text-sm rounded-lg block w-4/5 p-2.5 dark:bg-button-bg dark:focus:ring-primary-500 hover:bg-light-gray" required>Upload Produk</button>
    </div>
  </div>
  
);
export default NewProduct;
