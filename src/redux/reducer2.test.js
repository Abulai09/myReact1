import addPostReducer, { addPostActionCreator } from "./reducer2";

test('new post should be added', () => {
    //test data
    let action = addPostActionCreator("Hello")

    let initialState = {
        post: [
          { message: "Hey evreryone, i am learning react!!!", num: 24, name: "Dima" },
          { message: "I will be reachman", num: 99, name: "Damir" },
          { message: "Hello, everyone!!!", num: 99, name: "Amir" },
        ]
      };
      //action
    let newState = addPostReducer(initialState,action)
      //expect
    expect( newState.post.length).toBe(4)
});

 