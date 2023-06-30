import React from "react";
import { 
  Text,
  View,  
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

import Motiva from "./motiva/MotivaSansRegular.woff.ttf";
import MotivaBold from "./motiva/MotivaSansBold.woff.ttf";

Font.register({ family: "Motiva", src: Motiva });
Font.register({ family: "MotivaBold", src: MotivaBold });

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    backgroundColor: "#E4E4E4",
    fontFamily: "Motiva",
  },
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    backgroundColor: "#f60505",
  },
  textDescription: {
    fontSize: 8,
    color: "#0B6861",
  },
  textTitle: {
    fontSize: 8,
    color: "#000",
    fontWeight: "bold",
    fontFamily: "MotivaBold",
  },
  title: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "MotivaBold",
  },
});

export const Item = () => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 10,
        padding: 5,
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          borderBottomWidth: 0.5,
          borderBottomColor: "#000",
          paddingVertical: 5,
        }}
      >
        <View
          style={{
            width: "50%",
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Text style={styles.textDescription}>Pontuação</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Text style={styles.textDescription}>Meta</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Text style={styles.textDescription}>Status</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          borderBottomWidth: 0.5,
          paddingVertical: 5,
          borderBottomColor: "#929090",
        }}
      >
        <View
          style={{
            width: "50%",
          }}
        >
          <Text style={styles.textTitle}>
            EEM01 - WWR: Área Envidraçada da Fachada
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Text style={styles.textDescription}>1 de 1</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",

              width: "100%",
            }}
          >
            <Image
              src="./check.png"
              style={{
                width: 10,
                height: 10,
                borderRadius: 2,
              }}
              cache={true}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#45A041",
                width: 50,
                height: 10,
                borderRadius: 2,
              }}
            >
              <Text
                style={{
                  fontSize: 8,
                  color: "#fff",
                }}
              >
                AT
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          marginTop: 5,
        }}
      >
        <Text style={styles.textTitle}>Análise Técnica</Text>
        <View
          style={{
            width: "100%",
            marginTop: 5,
            borderRadius: 2,
            borderWidth: 0.5,
            borderColor: "#929090",
            padding: 5,
          }}
        >
          <Text
            style={[
              styles.textDescription,
              {
                color: "#787AAA",
                textAlign: "justify",
              },
            ]}
          >
            Dolor sit amet consectetur, adipisicing elit. Veniam at voluptate
            fugit adipisci dolores! Veritatis unde tempore, rem molestias
            consectetur velit necessitatibus dolores quod quam (alias vitae)
            officia obcaecati delectus (cumque magni). Explicabo inventore in
            laudantium aliquid officia (WWR). Quibusdam nostrum quisquam
            dignissimos WWR of 35%. Veritatis unde tempore, rem molestias quod
            quam 34,81%. Quod cum necessitatibus, atque consequatur assumenda,
            rerum dolore fugiat consequuntur, illo quos facilis.
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          marginTop: 5,
        }}
      >
        <Text style={styles.textTitle}>Planos de ação</Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text
            style={[
              styles.textTitle,
              {
                color: "#787AAA",
                marginTop: 5,
              },
            ]}
          >
            Item 1
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={[
                  styles.textTitle,
                  {
                    color: "#787AAA",
                    marginTop: 5,
                    fontWeight: "bold",
                    fontSize: 8,
                  },
                ]}
              >
                Responsavel:
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    color: "#787AAA",
                    marginTop: 5,
                    fontWeight: "normal",
                    fontSize: 8,
                  },
                ]}
              >
                {` Paisagismo`}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={[
                  styles.textTitle,
                  {
                    color: "#787AAA",
                    marginTop: 5,
                    fontWeight: "bold",
                    fontSize: 8,
                    marginLeft: 5,
                  },
                ]}
              >
                Status:
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    color: "#787AAA",
                    marginTop: 5,
                    fontWeight: "normal",
                    fontSize: 8,
                  },
                ]}
              >
                {` Solicitado`}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            marginTop: 5,
            borderRadius: 2,
            borderWidth: 0.5,
            borderColor: "#929090",
            padding: 5,
          }}
        >
          <Text
            style={[
              styles.textDescription,
              {
                color: "#787AAA",
                textAlign: "justify",
              },
            ]}
          >
            Cálculo de WWR - Window to Wall Ratio, considerando as áreas
            envidraçadas e de parede externa do(s) edifício(s).
          </Text>
        </View>

        <Text
          style={[
            styles.textTitle,
            {
              color: "#787AAA",
              marginTop: 5,
            },
          ]}
        >
          Análise Técnica: Ermesson Lima dos Santos, 30 de junho de 2023
        </Text>
        <View
          style={{
            width: "100%",
            marginTop: 5,
            borderRadius: 2,
            backgroundColor: "#EBEBEB",
            padding: 5,
          }}
        >
          <Text
            style={[
              styles.textDescription,
              {
                color: "#787AAA",
                textAlign: "justify",
              },
            ]}
          >
            RAP 01 (04/23) -   Dolor sit amet consectetur, adipisicing elit. Veniam at voluptate
            fugit adipisci dolores! Veritatis unde tempore, rem molestias  Dolor sit amet consectetur, 
            fugit adipisci dolores! Veritatis unde tempore, rem molestias
          </Text>
        </View>
      </View>
    </View>
  );
};
