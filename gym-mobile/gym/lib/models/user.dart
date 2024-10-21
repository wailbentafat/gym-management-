
class User {
  int id;
  String name;
  DateTime createdAt;
  DateTime enddate;
  int sessionleft;

  User(
      {required this.id,
      required this.name,
      required this.createdAt,
      required this.enddate,
      required this.sessionleft});

  Map<String, dynamic> toMap() => {
        'id': id,
        'name': name,
        'createdAt': createdAt.millisecondsSinceEpoch,
        'enddate': enddate.millisecondsSinceEpoch,
        'sessionleft': sessionleft
      };
  factory User.fromMap(Map<String, dynamic> map) {
    return User(
        id: map['id'],
        name: map['name'],
        createdAt: DateTime.fromMillisecondsSinceEpoch(map['createdAt']),
        enddate: DateTime.fromMillisecondsSinceEpoch(map['enddate']),
        sessionleft: map['sessionleft']);
  }
  void decrementses() {
    if (sessionleft > 0) {
      sessionleft--;
    } else {
      sessionleft = 0;
    }
  }
}
