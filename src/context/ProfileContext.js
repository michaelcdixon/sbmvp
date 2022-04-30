import React from "react";
import { collection, query, where, getDocs } from "firebase/firebase-firestore";
import { useState, useEffect } from "react";
import { db } from "firebase";

const querySnapshot = await getDocs(collection(db));
