import unittest
from server import PRINCIPAL, parse_response, project_for, public_url, request_input


class DemoTests(unittest.TestCase):
    def test_own_project(self):
        self.assertEqual(project_for(PRINCIPAL, "study-a")["id"], "study-a")

    def test_other_tenant(self):
        with self.assertRaises(PermissionError):
            project_for(PRINCIPAL, "study-b")

    def test_unassigned_member(self):
        with self.assertRaises(PermissionError):
            project_for({"tenant": "demo-a", "user": "unassigned"}, "study-a")

    def test_client_cannot_choose_authority(self):
        with self.assertRaises(PermissionError):
            request_input(PRINCIPAL, {"question": "Summarize", "mode": "project", "project_id": "study-b", "tenant": "demo-b"})

    def test_general_excludes_project(self):
        payload, _ = request_input(PRINCIPAL, {"question": "Explain research", "mode": "general", "project_id": "study-b"})
        self.assertIsNone(payload["project"])

    def test_current_requires_web(self):
        _, web = request_input(PRINCIPAL, {"question": "Latest research today", "mode": "general"})
        self.assertTrue(web)

    def test_private_links_rejected(self):
        for url in ("file:///data", "javascript:alert(1)", "http://localhost/a", "https://private.internal/a"):
            self.assertFalse(public_url(url))
        self.assertTrue(public_url("https://example.org/paper"))

    def test_no_fabricated_success(self):
        with self.assertRaises(ValueError):
            parse_response({"status": "failed", "model": "example"}, "example", False)

    def test_bounded_question(self):
        with self.assertRaises(ValueError):
            request_input(PRINCIPAL, {"question": "x" * 3001})


if __name__ == "__main__":
    unittest.main()
