// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Profile API and is why the file is called profileService.js
import axios from "axios";
import { songsData } from "../songsData";

const getAllSongs = async () => {
	// const response = await axios.get(`/api/songs`);

  // getting lyrics saved to local storage
	let savedLyrics = JSON.parse(localStorage.getItem("lyrics"));

	return savedLyrics ? savedLyrics : songsData;
};

// All of the endpoints in this file can be exported below
export { getAllSongs };
