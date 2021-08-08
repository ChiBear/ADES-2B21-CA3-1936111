import 'dart:convert';

import "package:http/http.dart" as http;

Future<http.Response> testFunction() {
  return http.get(Uri.parse('https://quizr-node-app.herokuapp.com/'));
}
