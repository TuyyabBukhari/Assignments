"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Write a function that accepts a array of items a person wants on a sandwich. 
function make_sandwich(...items) {
    console.log("Making a sandwich with the following items: " + items.join(", "));
}
make_sandwich("bread", "mayo", "lettuce", "tomatoes", "chicken");
make_sandwich("bread", "mayo", "egg");
make_sandwich("bread", "cheese", "ham");
