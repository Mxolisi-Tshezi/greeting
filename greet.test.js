describe("in greet greet Function", function () {
    describe("Selecting on three languages", function () {
      it("greet in isixhosa when isiXhosa is selected", function () {
        let greet = GreetingsFactory();
        greet.greetingMessage();
        assert.equal("Molo  Zendaya", greet.greetingMessage("Zendaya", "IsiXhosa"));
      });
      it("greet in English when English is selected", function () {
        let greet = GreetingsFactory();
        greet.greetingMessage();
        assert.equal("Hello  Zendaya", greet.greetingMessage("Zendaya", "English"));
      });
      it("if isiZulu is selected should greet name in isiZulu", function () {
        let greet = GreetingsFactory();
        greet.greetingMessage();
        assert.equal(
          "Sawubona  Zendaya",
          greet.greetingMessage("Zendaya", "isiZulu")
        );
      });
  
      describe("Name greeted once", function () {
        it("Checking if the Name was greeted before ", function () {
          let greet = GreetingsFactory();
          greet.storeName("Zendaya");
          greet.storeName("Mxo");
          assert.deepEqual(["Zendaya", "Mxo"], greet.storedNames());
        });
        it("return name greeted once", function () {
          let greet = GreetingsFactory();
          greet.storeName("Zendaya");
          greet.storeName("Mxo");
          greet.storeName("NOX");

  
          assert.deepEqual(
            [ "Zendaya", "Mxo", "NOX"],
            greet.storedNames()
          );
        });
        describe("Incrementing counter for greeting", function () {
          it("Count names greeted", function () {
            let greet = GreetingsFactory();
            greet.greetingMessage("Zendaya");
            greet.greetingMessage("Zendaya");
            assert.equal(1, greet.count());
          });
          it("different names greeted", function () {
            let greet = GreetingsFactory();
            greet.greetingMessage("Zendaya");
            greet.greetingMessage("Mxo");
       ;
            assert.equal(2, greet.count());
          });
        });
  
        describe("warnings/errors", function () {
          it("When no name entered and langauge choosen", function () {
            let greet = GreetingsFactory();
            greet.greetingMessage("", null);
            assert.equal(
              " Enter name and choose a language",
              greet.errorMessages("", null)
            );
          });


          it("When language is not entered ", function () {
            let greet = GreetingsFactory();
            greet.greetingMessage("Zendaya", null);
            assert.equal(
              "Language not selected",
              greet.errorMessages("Zendaya", null)
            );
            greet.greetingMessage("Max", "");
            assert.equal(
              "Language not selected",
              greet.errorMessages("Lewis", "")
            );
          });

          it("When language is not chosen", function () {
            let greet = GreetingsFactory();
            greet.greetingMessage("Zendaya", null);
            assert.equal(
              "Language not selected",
              greet.errorMessages("Zendaya", null)
            );
            greet.greetingMessage("Max", "");
            assert.equal(
              "Language not selected",
              greet.errorMessages("Lewis", "")
            );
          });
          it("if name has characters or numbers", function () {
            let greet = GreetingsFactory();
            greet.errorMessages("Zendaya", "IsiXhosa");
            assert.equal(
              "Invalid name",
              greet.errorMessages("908Zendaya", "IsiXhosa")
            );
            assert.equal(
              "Invalid name",
              greet.errorMessages("123", "isiZulu")
            );
          });
        });
      });
    });
  });