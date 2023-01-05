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
import { accountTypeOption } from "../data/dummy";
import { Helmet } from "react-helmet";

const NewUser = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Helmet>
        <title>Tambah Pengguna | Happypets</title>
      </Helmet>

      <Header category="Halaman" title="Tambah Pengguna Baru" />
      <div className="w-full">
        <form action="">
          <div className="justify-start flex content-center items-center my-4">
            <label
              for="product-name"
              class="font-medium text-black dark:text-gray-200 w-1/5"
            >
              Nama Pengguna
            </label>
            <input
              className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-4/5 p-2.5 dark:bg-secondary-dark-bg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Masukkan Nama Pengguna"
              required
            ></input>
          </div>
          <div className="justify-start flex content-center items-center my-4">
            <label
              for="product-name"
              class="font-medium text-black dark:text-gray-200 w-1/5"
            >
              No. Telpon
            </label>
            <input
              type="tel"
              className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-4/5 p-2.5 dark:bg-secondary-dark-bg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Masukkan No Telpon"
              required
            ></input>
          </div>
          <div className="justify-start flex content-center items-center my-4">
            <label
              for="product-name"
              class="font-medium text-black dark:text-gray-200 w-1/5"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-secondary-dark-bg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Masukkan Email"
              required
            ></input>
          </div>
          <div className="justify-start flex content-center items-center my-4">
            <label
              for="product-name"
              class="font-medium text-black dark:text-gray-200 w-1/5"
            >
              Password
            </label>
            <input
              type="password"
              className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-4/5 p-2.5 dark:bg-secondary-dark-bg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Masukkan Password"
              required
            ></input>
          </div>
          <div className="justify-start flex content-center items-center my-4 w-full">
            <label
              for="product-category"
              class="font-medium text-black dark:text-gray-200 w-1/5 content-center"
            >
              Tipe Akun
            </label>
            <select
              id="product-category"
              className='shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-4/5 p-2.5 dark:bg-secondary-dark-bg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'
            >
              {accountTypeOption.map((item, key) => (
                <option value={item.input}>{item.Name}</option>
              ))}
            </select>
          </div>
          <div className="justify-start flex content-center items-center my-4">
            <label
              for="sku"
              class="font-medium text-black dark:text-gray-200 w-1/5 content-center"
            >
              Profil Akun
            </label>
            <div
              id="product-image"
              className="rounded bg-white dark:bg-secondary-dark-bg border dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-10"
            >
              <button>
                <span className="text-2xl">
                  <BsPlusLg />
                </span>
              </button>
            </div>
          </div>
          <div className="justify-end flex content-center items-center my-4">
            <button
              type="submit"
              className="shadow-sm bg-white text-gray-900 text-sm rounded-lg block w-4/5 p-2.5 dark:bg-button-bg dark:focus:ring-primary-500 hover:bg-light-gray"
              required
            >
              Tambah Pengguna Baru
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
