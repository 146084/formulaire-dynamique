async function addDocument<T>(db, collectionName: string, doc: T): Promise<T> {
  const _collection = await db.collection(collectionName);
  if (!_collection) {
    return null;
  }

  let result = await _collection.insertOne(doc);
  if (result.ops && result.ops[0]) {
    result = result.ops[0];
  }

  return result;
}

export { addDocument };
