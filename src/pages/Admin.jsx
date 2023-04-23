import React, { useState } from "react";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import { Container } from "../layout/Container";
import { db, storage } from "../firebase.config";

const Admin = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    price: 0,
    imgUrl: "",
    description: "",
    description2: "",
    categories: [],
    tag: "",
  });
  const handleForm = async (event) => {
    event.preventDefault();
    const booksCollectionRef = collection(db, "books");
    const imageRef = ref(storage, `images/${form.imgUrl.name}`);
    uploadBytes(imageRef, form.imgUrl)
      .then(() => {
        getDownloadURL(imageRef)
          .then(async (url) => {
            await addDoc(booksCollectionRef, {
              ...form,
              imgUrl: url,
            });
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        toast.success("Product successfully added!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container>
      <form>
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-7 leading-7 text-gray-900">
              Add a new book
            </h2>
          </div>

          <div className=" pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="book-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Book Name
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, title: e.target.value }))
                    }
                    type="text"
                    name="title"
                    id="title"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Book author
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, author: e.target.value }))
                    }
                    type="text"
                    name="author"
                    id="author"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="book-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Tag
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, tag: e.target.value }))
                    }
                    type="text"
                    name="title"
                    id="title"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="book-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Categories
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        categories: e.target.value.split(","),
                      }))
                    }
                    type="text"
                    name="title"
                    id="title"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Price
                </label>
                <div className="mt-2 flex justify-center items-center gap-5 ">
                  <input
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, price: +e.target.value }))
                    }
                    id="price"
                    name="price"
                    type="number"
                    autoComplete="0.00$"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />{" "}
                  $
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    id="description"
                    name="description"
                    rows={5}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description suite
                </label>
                <div className="mt-2">
                  <textarea
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        description2: e.target.value,
                      }))
                    }
                    id="description2"
                    name="description2"
                    rows={5}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Cover photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={(e) =>
                            setForm((prev) => ({
                              ...prev,
                              imgUrl: e.target.files[0],
                            }))
                          }
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center j gap-x-6">
          <button
            onClick={(e) => handleForm(e)}
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add new book
          </button>
        </div>
      </form>
    </Container>
  );
};
export default Admin;
