// 1. Model.deleteOne()
// Deletes the first document that matches conditions from the collection.
//  It returns an object with the property deletedCount indicating how many
//  documents were deleted. Behaves like remove(), but deletes at most one document
//  regardless of the single option.

// 2. Model.findOne()
// The conditions are cast to their respective SchemaTypes before the command is sent.
// Note: conditions is optional, and if conditions is null or undefined, 
// an arbitrary document. If you're querying by _id, use findById() instead.
// mongoose will send an empty findOne command to MongoDB, which will return 

// 3.Model.findOneAndReplace()
// Finds a matching document, replaces it with the provided doc, and passes the 
// returned doc to the callback.
// Executes the query if callback is passed.
// This function triggers the following query middleware.
// findOneAndReplace()

// Model.findByIdAndUpdate()
// Finds a matching document, updates it according to the update arg,
//  passing any options, and returns the found document (if any) to the callback. 
//  The query executes if callback is passed.
// This function triggers the following middleware.
// findOneAndUpdate()
// Issues a mongodb findAndModify update command by a document
//  _id field. findByIdAndUpdate(id, ...) is equivalent
//   to findOneAndUpdate({ _id: id }, ...).