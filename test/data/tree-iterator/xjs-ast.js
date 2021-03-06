/*
 * AST for:
 * <div id="wow" disabled>
 * <Component:Test {...x}>{this.props.children}</Component:Test><Component.Test>{}</Component.Test>
 * </div>;
 */
module.exports = {
  "type":"Program",
  "body":[
    {
      "type":"ExpressionStatement",
      "expression":{
        "type":"XJSElement",
        "openingElement":{
          "type":"XJSOpeningElement",
          "name":{
            "type":"XJSIdentifier",
            "name":"div"
          },
          "selfClosing":false,
          "attributes":[
            {
              "type":"XJSAttribute",
              "name":{
                "type":"XJSIdentifier",
                "name":"id"
              },
              "value":{
                "type":"Literal",
                "value":"wow",
                "raw":"\"wow\""
              }
            },
            {
              "type":"XJSAttribute",
              "name":{
                "type":"XJSIdentifier",
                "name":"disabled"
              },
              "value":null
            }
          ]
        },
        "closingElement":{
          "type":"XJSClosingElement",
          "name":{
            "type":"XJSIdentifier",
            "name":"div"
          }
        },
        "children":[
          {
            "type":"Literal",
            "value":"\n",
            "raw":"\n"
          },
          {
            "type":"XJSElement",
            "openingElement":{
              "type":"XJSOpeningElement",
              "name":{
                "type":"XJSNamespacedName",
                "namespace":{
                  "type":"XJSIdentifier",
                  "name":"Component"
                },
                "name":{
                  "type":"XJSIdentifier",
                  "name":"Test"
                }
              },
              "selfClosing":false,
              "attributes":[
                {
                  "type":"XJSSpreadAttribute",
                  "argument":{
                    "type":"Identifier",
                    "name":"x"
                  }
                }
              ]
            },
            "closingElement":{
              "type":"XJSClosingElement",
              "name":{
                "type":"XJSNamespacedName",
                "namespace":{
                  "type":"XJSIdentifier",
                  "name":"Component"
                },
                "name":{
                  "type":"XJSIdentifier",
                  "name":"Test"
                }
              }
            },
            "children":[
              {
                "type":"XJSExpressionContainer",
                "expression":{
                  "type":"MemberExpression",
                  "computed":false,
                  "object":{
                    "type":"MemberExpression",
                    "computed":false,
                    "object":{
                      "type":"ThisExpression"
                    },
                    "property":{
                      "type":"Identifier",
                      "name":"props"
                    }
                  },
                  "property":{
                    "type":"Identifier",
                    "name":"children"
                  }
                }
              }
            ]
          },
          {
            "type":"XJSElement",
            "openingElement":{
              "type":"XJSOpeningElement",
              "name":{
                "type":"XJSMemberExpression",
                "object":{
                  "type":"XJSIdentifier",
                  "name":"Component"
                },
                "property":{
                  "type":"XJSIdentifier",
                  "name":"Test"
                }
              },
              "selfClosing":false,
              "attributes":[

              ]
            },
            "closingElement":{
              "type":"XJSClosingElement",
              "name":{
                "type":"XJSMemberExpression",
                "object":{
                  "type":"XJSIdentifier",
                  "name":"Component"
                },
                "property":{
                  "type":"XJSIdentifier",
                  "name":"Test"
                }
              }
            },
            "children":[
              {
                "type":"XJSExpressionContainer",
                "expression":{
                  "type":"XJSEmptyExpression"
                }
              }
            ]
          },
          {
            "type":"Literal",
            "value":"\n",
            "raw":"\n"
          }
        ]
      }
    }
  ]
}
