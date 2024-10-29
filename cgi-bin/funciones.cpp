#include <iostream>
#include <fstream>
#include <string>

using namespace std;

void addNumber(const string& number) {
    ofstream file("numeros.txt", ios::app);
    if (file.is_open()) {
        file << number << ",";
        file.close();
    }
}

void resetNumbers() {
    ofstream file("numeros.txt", ios::trunc);
    file.close();
}

int main() {
    // Manejo de peticiones POST y DELETE
    // Asegúrate de verificar el tipo de petición y llamar a addNumber o resetNumbers
}