import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { BsPlusLg } from "react-icons/bs";
import { Header } from "../components";
import { EditorData, storeAddressOption } from "../data/dummy";

const NewStore = () => (
  <div className="m-2 md:m-10 my-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    {/* <Helmet>
      <title>Tambah Toko | Happypets</title>
    </Helmet> */}

    <Header category="Halaman" title="Tambah Toko Baru" />
    <form action="">
      <div className="justify-start flex content-center items-center my-4">
        <label
          for="product-name"
          class="font-medium text-black dark:text-gray-200 w-1/5"
        >
          Nama Toko
        </label>
        <input
          className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-4/5 p-2.5 dark:bg-secondary-dark-bg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Masukkan Nama Toko"
          required
        ></input>
      </div>
      <div className="justify-start flex content-center items-center my-4 w-full">
        <label
          for="product-category"
          class="font-medium text-black dark:text-gray-200 w-1/5 content-center"
        >
          Alamat Toko
        </label>
        <select
          id="product-category"
          className='mr-2 shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-2/5 p-2.5 dark:bg-secondary-dark-bg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'
        >
          {storeAddressOption.map((item, key) => (
            <option key={key} value={item.Name}>
              {item.Name}
            </option>
          ))}
        </select>
        <input
          className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-2/5 p-2.5 dark:bg-secondary-dark-bg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Masukkan Alamat Lengkap"
          required
        ></input>
      </div>
      <div className="justify-start flex content-center items-center my-4">
        <label
          for="product-name"
          class="font-medium text-black dark:text-gray-200 w-1/5"
        >
          Pemilik Akun Toko
        </label>
        <input
          type="search"
          className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-4/5 p-2.5 dark:bg-secondary-dark-bg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Cari Nama Akun Pemilik"
          required
        ></input>
      </div>
      <div className="justify-start flex content-center items-center my-4">
        <label
          for="sku"
          class="font-medium text-black dark:text-gray-200 w-1/5 content-center"
        >
          Logo Toko
        </label>
        <div
          id="product-image"
          className="rounded bg-white shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5 dark:bg-secondary-dark-bg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-10"
        >
          <button>
            <span className="text-2xl">
              <BsPlusLg />
            </span>
          </button>
        </div>
      </div>

      <div className="justify-start flex content-center items-center my-4">
        <label
          for="sku"
          class="font-medium text-black dark:text-gray-200 w-1/5 content-center"
        >
          Sampul Toko
        </label>
        <div
          id="product-image"
          className="rounded bg-white shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5 dark:bg-secondary-dark-bg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-10"
        >
          <button>
            <span className="text-2xl">
              <BsPlusLg />
            </span>
          </button>
        </div>
      </div>
    </form>
    <div className="justify-start flex content-center items-center my-4">
      <span className="w-1/5 font-medium text-black dark:text-gray-200">
        Deskripsi Toko
      </span>
      <div className="w-4/5">
        <RichTextEditorComponent>
          <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
        </RichTextEditorComponent>
      </div>
    </div>

    <div className="justify-end flex content-center items-center my-4">
      <button
        type="submit"
        className="shadow-sm bg-white text-gray-900 text-sm rounded-lg block w-4/5 p-2.5 dark:bg-button-bg dark:focus:ring-primary-500 hover:bg-light-gray"
        required
      >
        Tambah Toko Baru
      </button>
    </div>
  </div>
);

export default NewStore;
